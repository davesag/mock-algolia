const { expect } = require('chai')
const proxyquire = require('proxyquire')

const { mockRequest, mockResponse } = require('mock-req-res')

const cleanStorage = () => undefined
const mockStorage = () => cleanStorage

describe('src/api/cleanStorage', () => {
  const cleanRequests = proxyquire('src/api/cleanRequests', {
    'src/utils/storage': mockStorage
  })

  const req = mockRequest()
  const res = mockResponse()

  before(() => {
    cleanRequests(req, res)
  })

  it('calls res.json with the correct data', () => {
    expect(res.json).to.have.been.calledOnce
  })
})
