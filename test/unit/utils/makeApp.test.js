const { expect } = require('chai')
const { stub, spy } = require('sinon')
const proxyquire = require('proxyquire').noCallThru()

const api = require('src/api')

describe('src/utils/makeApp', () => {
  const fakeCors = 'cors'
  const fakeBodyParser = {
    json: stub().returns('json-parser')
  }

  const fakeErrorHandler = 'errorHandler'

  const apiDetails = {
    apiDefinition: { test: 'just a test' },
    '@noCallThru': true
  }
  const mockConnect = spy()
  const connector = () => mockConnect
  const mockCors = stub().returns(fakeCors)
  const fakeNotFoundError = 'not found error'
  const mockUse = spy()
  const mockSet = spy()
  const mockAll = spy()

  const fakeExpress = () => ({
    use: mockUse,
    set: mockSet,
    all: mockAll
  })
  const fakeUI = 'some UI thing'
  const mockUiExpress = { setup: stub().returns(fakeUI), serve: stub() }

  const makeApp = proxyquire('src/utils/makeApp', {
    express: fakeExpress,
    cors: mockCors,
    'body-parser': fakeBodyParser,
    'swagger-routes-express': { connector },
    'swagger-ui-express': mockUiExpress,
    'src/utils/notFoundError': fakeNotFoundError,
    'src/utils/api/apiDetails': apiDetails,
    'src/utils/genericErrors': fakeErrorHandler
  })

  let app

  before(async () => {
    app = await makeApp()
  })

  it('uses cors', () => {
    expect(mockCors).to.have.been.calledOnce
    expect(mockUse).to.have.been.calledWith(fakeCors)
  })
  //  app.use('/docs', swaggerUi.serve, swaggerUi.setup(apiDefinition))

  it('uses docs', () => {
    expect(mockUiExpress.setup).to.have.been.calledOnceWith(
      apiDetails.apiDefinition
    )
    expect(mockUse).to.have.been.calledWith(
      '/docs',
      mockUiExpress.serve,
      fakeUI
    )
  })

  it('uses bodyParser.json', () => {
    expect(fakeBodyParser.json).to.have.been.calledOnce
    expect(mockUse).to.have.been.calledWith('json-parser')
  })

  it('sets trust proxy to true', () => {
    expect(mockSet).to.have.been.calledWith('trust proxy', true)
  })

  it('invokes connect with app', () => {
    expect(mockConnect).to.have.been.calledWith(app)
  })

  it('calls app.all to handle unhandled routes', () => {
    expect(app.all).to.have.been.calledWith('/1/*', api.v1_genericUnhandled)
  })

  it('uses the notFoundError handler', () => {
    expect(mockUse).to.have.been.calledWith(fakeNotFoundError)
  })

  it('uses the genericError handler', () => {
    expect(mockUse).to.have.been.calledWith(fakeErrorHandler)
  })
})
