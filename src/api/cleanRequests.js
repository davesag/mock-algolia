const { cleanStorage } = require('src/utils/storage')

const cleanRequests = (req, res) => {
  cleanStorage()
  res.json()
}

module.exports = cleanRequests
