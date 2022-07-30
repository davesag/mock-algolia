const logger = require('src/utils/logger')
const { makeTaskID, makeObjectID } = require('src/utils/ids')
const { addToStorage } = require('src/utils/storage')

/*
  handles
  - addObjects (action = addObject)
  - saveObjects (action = updateObject)
  - partialUpdateObjects (action = partialUpdateObject)
  - deleteObjects (action = deleteObject)
*/
const bulkActions = (req, res) => {
  addToStorage('bulkActions', req.body)
  logger.debug('bulkActions')
  logger.debug('url', req.originalUrl)
  logger.debug('params', req.params)
  logger.debug('body', JSON.stringify(req.body, null, 2))
  res.json({
    objectIDs: req.body.requests.map(({ body: { objectID } }) => objectID || makeObjectID()),
    taskId: makeTaskID()
  })
}

module.exports = bulkActions
