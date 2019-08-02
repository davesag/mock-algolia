const logger = require('src/utils/logger')
const { makeTaskID, makeObjectID } = require('src/utils/ids')

/*

*/
const updateObject = (req, res) => {
  logger.debug('updateObject')
  logger.debug('url', req.originalUrl)
  logger.debug('params', req.params)
  logger.debug('body', JSON.stringify(req.body, null, 2))
  res.json({
    objectID: req.params.objectID || makeObjectID(),
    taskId: makeTaskID()
  })
}

module.exports = updateObject
