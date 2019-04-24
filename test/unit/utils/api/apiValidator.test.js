const { expect } = require('chai')
const { stub, match } = require('sinon')
const proxyquire = require('proxyquire')

const mockLogger = require('test/utils/mockLogger')

describe('src/utils/api/apiValidator', () => {
  const logger = mockLogger()
  const validator = stub()
  const apiValidator = proxyquire('src/utils/api/apiValidator', {
    'swagger-express-validator': validator,
    'src/utils/logger': logger
  })

  const schema = 'some-schema'

  before(() => {
    apiValidator(schema)
  })

  it('called validator', () => {
    expect(validator).to.have.been.calledWith(
      match({
        schema,
        validateRequest: true,
        validateResponse: true
      })
    )
  })
})
