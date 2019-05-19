const uptime = require('src/utils/uptime')
const {
  apiSummary: {
    info: { name, version, description }
  }
} = require('src/utils/api/apiDetails')

const ping = (req, res) => {
  res.json({
    name,
    description,
    version,
    uptime: uptime()
  })
}

module.exports = ping
