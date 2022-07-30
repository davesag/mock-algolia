const logger = require('src/utils/logger')
const { makeTaskID, makeObjectID } = require('src/utils/ids')
const { addToStorage } = require('src/utils/storage')

/*

*/
const deleteObject = (req, res) => {
  addToStorage('deleteObject', req.params)
  logger.debug('deleteObject')
  logger.debug('url', req.originalUrl)
  logger.debug('params', req.params)
  res.json({
    objectID: req.params.objectID || makeObjectID(),
    taskId: makeTaskID()
  })
}

module.exports = deleteObject
