const logger = require('../../../utils/logger')
const { makeTaskID, makeObjectID } = require('../../../utils/ids')

/*

*/
const deleteObject = (req, res) => {
  logger.debug('deleteObject')
  logger.debug('url', req.originalUrl)
  logger.debug('params', req.params)
  res.json({
    objectID: req.params.objectID || makeObjectID(),
    taskId: makeTaskID()
  })
}

module.exports = deleteObject
