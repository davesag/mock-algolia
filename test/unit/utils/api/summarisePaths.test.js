const { expect } = require('chai')

const summarisePaths = require('src/utils/api/summarisePaths')
const fakePaths = require('test/utils/fakePaths')

describe('src/utils/api/summarisePaths', () => {
  const expected = {
    get: ['/ping', '/api/v1/function/:id']
  }

  it('summarises the path correctly', () => {
    expect(summarisePaths(fakePaths, '/api/v1')).to.deep.equal(expected)
  })
})
