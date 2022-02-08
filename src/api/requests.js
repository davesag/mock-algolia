const { getStorage } = require('src/utils/storage')

const requests = (req, res) => {
  res.json(getStorage())
}

module.exports = requests
