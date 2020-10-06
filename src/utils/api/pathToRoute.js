const path = require('path')
const pathSeparator = new RegExp(path.sep, 'g')

const pathToRoute = (path, base) => path.slice(base.length + 1, -3).replace(pathSeparator, '_')

module.exports = pathToRoute
