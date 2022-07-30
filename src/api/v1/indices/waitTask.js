const logger = require('src/utils/logger')
const { addToStorage } = require('src/utils/storage')

/*

*/
const waitTask = (req, res) => {
  addToStorage('waitTask', req.params)
  logger.debug('waitTask')
  logger.debug('url', req.originalUrl)
  logger.debug('params', req.params)
  res.json({
    status: 'published'
  })
}

module.exports = waitTask
