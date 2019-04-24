const { expect } = require('chai')
const { match, stub } = require('sinon')
const proxyquire = require('proxyquire')

const fakePaths = require('test/utils/fakePaths')

describe('src/utils/api/summariseApi', () => {
  const paths = {
    get: ['/', '/ping', '/api/v1/source/:id']
  }

  const summarise = stub()

  const summariseApi = proxyquire('src/utils/api/summariseApi', {
    'src/utils/api/summarisePaths': summarise
  })

  const description = 'The API for the IDP Source Manager.'
  const version = '1.0.0'
  const name = 'Source Manager'

  const fakeApi = {
    info: {
      description,
      version,
      title: name,
      termsOfService: 'http://docs.idwire.org/terms/',
      contact: { email: 'david.sag@industrie.co' },
      license: {
        name: 'Apache 2.0',
        url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
      }
    },
    host: 'source-manager.idwire.org',
    basePath: '/api/v1',
    schemes: ['https', 'http'],
    paths: fakePaths,
    definitions: {
      NewSource: {
        type: 'object',
        required: ['url'],
        additionalProperties: false,
        properties: {
          name: { type: 'string' },
          url: { type: 'string', format: 'uri' }
        }
      },
      Source: {
        type: 'object',
        required: ['url', 'createdAt', 'updatedAt'],
        additionalProperties: false,
        properties: {
          name: { type: 'string' },
          url: { type: 'string', format: 'uri' },
          createdAt: { type: 'string', format: 'date-time' },
          updatedAt: { type: 'string', format: 'date-time' }
        }
      },
      APIVersion: {
        type: 'object',
        required: ['version', 'path'],
        additionalProperties: false,
        properties: {
          version: { type: 'integer', format: 'int64' },
          path: { type: 'string' }
        }
      },
      ServerInfo: {
        type: 'object',
        required: ['name', 'description', 'version', 'uptime'],
        additionalProperties: false,
        properties: {
          name: { type: 'string' },
          description: { type: 'string' },
          version: { type: 'string' },
          uptime: { type: 'number' }
        }
      },
      ArrayOfSources: {
        type: 'array',
        items: { $ref: '#/definitions/Source' }
      },
      ArrayOfVersions: {
        type: 'array',
        items: { $ref: '#/definitions/APIVersion' }
      }
    },
    externalDocs: {
      description: 'Find out more about The Information Disorder Project',
      url: 'https://idwire.org'
    }
  }

  const expected = {
    basePath: fakeApi.basePath,
    info: { description, name, version },
    paths
  }

  let result

  before(() => {
    summarise.returns(paths)
    result = summariseApi(fakeApi)
  })

  it('called summarisePaths', () => {
    expect(summarise).to.have.been.calledWith(
      match(fakeApi.paths),
      fakeApi.basePath
    )
  })

  it('summarised the api correctly', () => {
    expect(result).to.deep.equal(expected)
  })
})
