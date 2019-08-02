const { expect } = require('chai')

const pathToRoute = require('src/utils/api/pathToRoute')

describe('src/utils/api/pathToRoute', () => {
  const base = 'starts-here'
  const file = `${base}/my/awesome/file.js`
  const expected = 'my_awesome_file'

  it('converts the path to a route as expected', () => {
    expect(pathToRoute(file, base)).to.equal(expected)
  })
})
