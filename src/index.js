/* eslint-disable promise/always-return */
const Server = require('src/server')
const logger = require('src/utils/logger')

Server.start()
  .then(() => {
    logger.debug('Server Started')
  })
  .catch(err => {
    logger.error('Caught error', err)
  })
