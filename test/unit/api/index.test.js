const { expect } = require('chai')

const mockApi = require('test/utils/mockApi')

const api = require('src/api')

describe('src/api', () => {
  const doTest = handler => {
    it(`has an API handler for ${handler}`, () => {
      expect(api[handler]).to.be.a('function')
    })
  }

  Object.keys(mockApi).forEach(doTest)
})
