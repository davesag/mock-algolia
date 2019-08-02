const { INTERNAL_SERVER_ERROR } = require('http-status-codes')

const logger = require('src/utils/logger')
const ERRORS = require('src/errors')

const genericErrors = (err, req, res, next) => {
  if (res.headersSent) return next(err)
  const { path } = req
  const { status = INTERNAL_SERVER_ERROR } = err

  logger.error(ERRORS.GENERIC_ERROR(path), err.message)
  res.status(status).json({ error: err.message })
}

module.exports = genericErrors
