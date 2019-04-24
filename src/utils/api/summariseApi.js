const summarisePaths = require('src/utils/api/summarisePaths')

const summariseApi = ({
  basePath,
  info: { description, title: name, version },
  paths
}) => ({
  basePath,
  info: { name, description, version },
  paths: summarisePaths(paths, basePath)
})

module.exports = summariseApi
