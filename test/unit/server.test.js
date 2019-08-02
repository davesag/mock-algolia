const { expect } = require('chai')
const { stub } = require('sinon')
const proxyquire = require('proxyquire')

const mockLogger = require('test/utils/mockLogger')

describe('src/server', () => {
  const logger = mockLogger()
  const mockApp = { listen: stub() }
  const mockMakeApp = stub()

  const server = proxyquire('src/server', {
    'src/utils/makeApp': mockMakeApp,
    'src/utils/logger': logger
  })

  const resetStubs = () => {
    mockMakeApp.reset()
    mockApp.listen.reset()
  }

  const mockServer = 'a server'

  let outcome

  context('when it works fine', () => {
    before(async () => {
      mockMakeApp.resolves(mockApp)
      mockApp.listen.resolves(mockServer)
      outcome = await server.start()
    })

    after(resetStubs)

    it('called makeApp once', () => {
      expect(mockMakeApp).to.have.been.calledOnce
    })

    it('invoked app.listen', () => {
      expect(mockApp.listen).to.have.been.calledOnce
    })

    it('logged the startup', () => {
      expect(logger.debug).to.have.been.calledWith(
        'Server started. Listening on port'
      )
    })

    it('returns the server', () => {
      expect(outcome).to.have.property('server', mockServer)
    })
  })

  context('when it fails', () => {
    const error = new Error('oops')

    before(async () => {
      mockMakeApp.rejects(error)
      try {
        await server.start()
      } catch (err) {
        outcome = err
      }
    })

    after(resetStubs)

    it('called makeApp once', () => {
      expect(mockMakeApp).to.have.been.calledOnce
    })

    it('did not invoke app.listen', () => {
      expect(mockApp.listen).not.to.have.been.called
    })

    it('logged the error', () => {
      expect(logger.error).to.have.been.calledWith(
        'Could not start the server',
        error
      )
    })

    it('threw the error', () => {
      expect(outcome).to.equal(error)
    })
  })
})
