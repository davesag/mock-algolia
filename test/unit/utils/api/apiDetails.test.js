const { expect } = require('chai')
const { stub } = require('sinon')
const proxyquire = require('proxyquire')

describe('src/utils/api/apiDetails', () => {
  const fakeDoc = { test: 'api-document' }
  const mockYAML = { load: stub().returns(fakeDoc) }
  const fakeSummary = { ...fakeDoc, summary: true }
  const summarise = stub().returns(fakeSummary)

  let apiDefinition
  let apiSummary

  before(() => {
    ;({ apiDefinition, apiSummary } = proxyquire('src/utils/api/apiDetails', {
      yamljs: mockYAML,
      'swagger-routes-express': { summarise }
    }))
  })

  it('loads the api doc', () => {
    expect(mockYAML.load).to.have.been.calledWith('api.yml')
  })

  it('summarises the api doc', () => {
    expect(summarise).to.have.been.calledWith(fakeDoc)
  })

  it('populated the apiDefinition', () => {
    expect(apiDefinition).to.deep.equal(fakeDoc)
  })

  it('populated the apiSummary', () => {
    expect(apiSummary).to.deep.equal(fakeSummary)
  })
})
