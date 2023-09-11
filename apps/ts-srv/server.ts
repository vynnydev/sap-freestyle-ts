import 'reflect-metadata'
import express from 'express'
import { createCombinedHandler } from 'cds-routing-handlers'
import cds from '@sap/cds'

export class Server {
  public static async execute() {
    const app = express()

    const application = createCombinedHandler({
      handler: [__dirname + "/domain/entities/**/*.js", __dirname + "/usecases/**/*.js"]
    })

    const sapAPI = await cds.connect.to("db")
    await cds
      .serve("all")
      .at("odata")
      .in(app)
      .with(srv => application(srv))

    // Redirect requests to the OData Service
    app.get('/v1/customers', function(req, res) {
      res.redirect('/odata')
    })

    app.patch('/v1/customers/:customerId', function(req, res) {
      res.redirect('/odata')
    })

    // Run the server
    const port = process.env.PORT || 3001
    app.listen(port, async () => {
      console.log(`Server is running at http://localhost:${port}`)
    })
  }
}

Server.execute()