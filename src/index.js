/* eslint-disable promise/always-return */
const Server = require('./server')
const logger = require('./utils/logger')

Server.start()
  .then(() => {
    logger.debug('Server Started')
  })
  .catch(err => {
    logger.error('Caught error', err)
  })
