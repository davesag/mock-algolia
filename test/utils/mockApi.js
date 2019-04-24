const path = require('path')
const traverse = require('traverse-folders')

const pathSeparator = new RegExp(path.sep, 'g')

const noop = () => {}

const names = []
const apiPath = 'src/api'
const processor = file => {
  const name = file.slice(apiPath.length + 1, -3).replace(pathSeparator, '_')
  names.push(name)
}
traverse(apiPath, processor)

const mockApi = names.reduce((acc, elem) => {
  acc[elem] = noop
  return acc
}, {})

module.exports = mockApi
