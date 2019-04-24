const { expect } = require('chai')
const { stub } = require('sinon')
const proxyquire = require('proxyquire')

describe('src/utils/api/apiDefinition', () => {
  const fakeDoc = { test: 'api-document' }
  const mockYAML = { load: stub().returns(fakeDoc) }
  const fakeSummary = { ...fakeDoc, summary: true }
  const mockSummarise = stub().returns(fakeSummary)

  let apiDefinition
  let apiSummary

  before(() => {
    ;({ apiDefinition, apiSummary } = proxyquire(
      'src/utils/api/apiDefinition',
      {
        yamljs: mockYAML,
        'src/utils/api/summariseApi': mockSummarise
      }
    ))
  })

  it('loads the api doc', () => {
    expect(mockYAML.load).to.have.been.calledWith('api.yml')
  })

  it('summarises the api doc', () => {
    expect(mockSummarise).to.have.been.calledWith(fakeDoc)
  })

  it('populated the apiDefinition', () => {
    expect(apiDefinition).to.deep.equal(fakeDoc)
  })

  it('populated the apiSummary', () => {
    expect(apiSummary).to.deep.equal(fakeSummary)
  })
})
