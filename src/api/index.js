const traverse = require('traverse-folders')
const pathToRoute = require('src/utils/api/pathToRoute')

const apis = {}

const processor = file => {
  const name = pathToRoute(file, __dirname)
  apis[name] = require(file)
}

traverse(__dirname, processor)

module.exports = apis
