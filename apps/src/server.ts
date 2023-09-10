import 'reflect-metadata'
import express from 'express'
import { createCombinedHandler } from 'cds-routing-handlers'
import cds from '@sap/cds'

export class Server {
  public static async execute() {
    const app = express()

    const hdl = createCombinedHandler({
      handler: [__dirname + "/domain/entities/**/*.ts"]
    })

    const sapAPI = await cds.connect.to("db")
    await cds
      .serve("all")
      .at("odata")
      .in(app)
      .with(srv => hdl(srv))

    // Redirect requests to the OData Service
    app.get('/v1/customers/users', function(req, res) {
      res.redirect('/odata')
    })

    app.post('/v1/customers/user', async function(req, res) {
      const sapAPI = await cds.connect.to("db")
      return sapAPI.tx(req).create('/v1/customers/user', req.body)
    })

    app.patch('')

    // Run the server
    const port = process.env.PORT || 3001
    app.listen(port, async () => {
      console.log(`Server is running at http://localhost:${port}`)
    })
  }
}

Server.execute()