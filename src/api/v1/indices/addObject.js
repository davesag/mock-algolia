const logger = require('src/utils/logger')
const { makeTaskID, makeObjectID } = require('src/utils/ids')
const { addToStorage } = require('src/utils/storage')

/*

*/
const addObject = (req, res) => {
  addToStorage('addObject', req.body)
  logger.debug('addObject')
  logger.debug('url', req.originalUrl)
  logger.debug('params', req.params)
  logger.debug('body', JSON.stringify(req.body, null, 2))
  res.json({
    objectID: req.body.objectID || makeObjectID(),
    taskId: makeTaskID()
  })
}

module.exports = addObject
