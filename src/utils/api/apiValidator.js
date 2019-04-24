const util = require('util')
const validator = require('swagger-express-validator')
const logger = require('src/utils/logger')

/* istanbul ignore next */
const common = (req, errors) =>
  `${req.method} ${req.originalUrl}\n ${util.inspect(errors)}`

/* istanbul ignore next */
const requestValidationFn = (req, data, errors) => {
  logger.error(`Request Invalid: ${common(req, errors)}`)
  logger.debug('data', util.inspect(data))
}

/* istanbul ignore next */
const responseValidationFn = (req, data, errors) => {
  logger.error(`Response Invalid: ${common(req, errors)}`)
}

const apiValidator = schema => {
  const config = {
    schema,
    validateRequest: true,
    validateResponse: true,
    requestValidationFn,
    responseValidationFn
  }
  return validator(config)
}

module.exports = apiValidator
