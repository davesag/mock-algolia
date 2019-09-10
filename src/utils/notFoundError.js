const { NOT_FOUND } = require('http-status-codes')
const ERRORS = require('../errors')

const notFoundError = (req, res) => {
  res.status(NOT_FOUND).json({ error: ERRORS.UNKNWON_ROUTE })
}

module.exports = notFoundError
