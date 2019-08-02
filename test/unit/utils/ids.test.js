const { expect } = require('chai')
const { stub } = require('sinon')
const proxyquire = require('proxyquire')

describe('src/utils/ids', () => {
  const uuid = { v4: stub() }
  const { makeTaskID, makeObjectID } = proxyquire('src/utils/ids', { uuid })

  describe('#makeTaskID', () => {
    it('returns 1', () => {
      expect(makeTaskID()).to.equal(1)
    })
  })

  describe('#makeObjectID', () => {
    const id = '12345'
    let result

    before(() => {
      uuid.v4.returns(id)
      result = makeObjectID()
    })

    it('called uuid.v4', () => {
      expect(uuid.v4).to.have.been.calledOnce
    })

    it('returned the expected id', () => {
      expect(result).to.equal(id)
    })
  })
})
