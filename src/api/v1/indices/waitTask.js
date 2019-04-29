const logger = require('src/utils/logger')

/*

*/
const waitTask = (req, res) => {
  logger.debug('waitTask')
  logger.debug('url', req.originalUrl)
  logger.debug('params', req.params)
  res.json({
    status: 'published'
  })
}

module.exports = waitTask
