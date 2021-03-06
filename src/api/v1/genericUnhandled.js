const logger = require('src/utils/logger')
const { makeTaskID } = require('src/utils/ids')

const genericUnhandled = (req, res) => {
  logger.debug('unhandled route', req.method, req.originalUrl)
  logger.debug('params', req.params)
  logger.debug('body', JSON.stringify(req.body, null, 2))
  res.json({ taskID: makeTaskID() })
}

module.exports = genericUnhandled
