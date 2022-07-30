const { expect } = require('chai')
const proxyquire = require('proxyquire')

const { mockRequest, mockResponse } = require('mock-req-res')

const getStorage = () => ({
  addObject: [],
  bulkActions: [],
  deleteObject: [],
  replaceObject: [],
  updateObject: [],
  updateSettings: [],
  waitTask: []
})
const mockStorage = () => getStorage

const mockApiDefinition = {
  addObject: [],
  bulkActions: [],
  deleteObject: [],
  replaceObject: [],
  updateObject: [],
  updateSettings: [],
  waitTask: []
}

describe('src/api/requests', () => {
  const requests = proxyquire('src/api/requests', {
    'src/utils/storage': mockStorage
  })

  const req = mockRequest()
  const res = mockResponse()

  const expected = mockApiDefinition

  before(() => {
    requests(req, res)
  })

  it('calls res.json with the correct data', () => {
    expect(res.json).to.have.been.calledWith(expected)
  })
})
