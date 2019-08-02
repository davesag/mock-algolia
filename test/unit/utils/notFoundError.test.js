const { expect } = require('chai')
const { mockRequest, mockResponse } = require('mock-req-res')
const { NOT_FOUND } = require('http-status-codes')

const ERRORS = require('src/errors')
const notFoundError = require('src/utils/notFoundError')

describe('src/utils/notFoundError', () => {
  const res = mockResponse()
  const req = mockRequest()

  before(() => {
    notFoundError(req, res)
  })

  it('called res.status with NOT_FOUND status', () => {
    expect(res.status).to.have.been.calledWith(NOT_FOUND)
  })

  it('called res.json with the error message', () => {
    expect(res.json).to.have.been.calledWith({ error: ERRORS.UNKNWON_ROUTE })
  })
})
