const makeApp = require('src/utils/makeApp')
const logger = require('src/utils/logger')
const { PORT } = require('src/utils/config')

const start = async (options = {}) => {
  const { port = PORT } = options;
  try {
    const app = await makeApp()
    const server = await app.listen(port)
    logger.debug('Server started. Listening on port', port)

    return { server }
  } catch (err) {
    logger.error('Could not start the server', err)
    throw err
  }
}

module.exports = { start }
