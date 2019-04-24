const { expect } = require('chai')
const request = require('supertest')
const serverCache = require('test/server/serverCache')
const {
  apiSummary: {
    info: { name, version, description }
  }
} = require('src/utils/api/apiDefinition')

describe('GET /ping', () => {
  let server

  before(() => {
    server = serverCache.get()
  })

  it('returns an Okay result and status code 200', done => {
    request(server)
      .get('/ping')
      .end((err, res) => {
        expect(err).to.not.exist
        expect(res.statusCode).to.equal(200)
        expect(res.body).to.have.property('name', name)
        expect(res.body).to.have.property('description', description)
        expect(res.body).to.have.property('version', version)
        expect(res.body).to.have.property('uptime')
        done()
      })
  })
})
