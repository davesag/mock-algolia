const uptime = require('../utils/uptime')
const {
  apiSummary: {
    info: { name, version, description }
  }
} = require('../utils/api/apiDetails')

const ping = (req, res) => {
  res.json({
    name,
    description,
    version,
    uptime: uptime()
  })
}

module.exports = ping
