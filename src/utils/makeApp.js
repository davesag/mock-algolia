const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
const { connector } = require('swagger-routes-express')

const api = require('../api')
const { apiDefinition } = require('./api/apiDetails')

const genericErrors = require('./genericErrors')
const notFoundError = require('./notFoundError')

const makeApp = async () => {
  const connect = connector(api, apiDefinition)

  const app = express()
  app.use(cors())
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(apiDefinition))
  app.use(bodyParser.json())

  app.set('trust proxy', true) // needed to get the requesting ip
  // add any other middlewares here
  connect(app) // apply the routes

  app.all('/1/*', api.v1_genericUnhandled)

  app.use(notFoundError)
  app.use(genericErrors) // must be last
  return app
}

module.exports = makeApp
