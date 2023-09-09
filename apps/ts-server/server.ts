import 'reflect-metadata'
import express from 'express'
import { createCombinedHandler } from 'cds-routing-handlers'
import cds from '@sap/cds'

export class Server {
  public static async execute() {
    const app = express()

    const hdl = createCombinedHandler({
      handler: [__dirname + "/domain/entities/**/*.js"]
    })

    cds.connect("db")
    await cds
      .serve("all")
      .at("odata")
      .in(app)
      .with(srv => hdl(srv))

    // Redirect requests to the OData Service
    app.get('/', function(req, res) {
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