const { spy } = require('sinon')

const mockLogger = () => ({
  debug: spy(),
  error: spy(),
  info: spy()
})

module.exports = mockLogger
