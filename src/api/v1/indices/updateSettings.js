const logger = require('../../../utils/logger')
const { makeTaskID } = require('../../../utils/ids')

/*

*/
const updateSettings = (req, res) => {
  logger.debug('updateSettings')
  logger.debug('url', req.originalUrl)
  logger.debug('params', req.params)
  logger.debug('body', JSON.stringify(req.body, null, 2))
  res.json({
    taskId: makeTaskID()
  })
}

module.exports = updateSettings
