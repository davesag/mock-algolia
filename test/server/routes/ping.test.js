const { expect } = require('chai')
const request = require('supertest')
const serverCache = require('test/utils/serverCache')
const {
  apiSummary: {
    info: { name, version, description }
  }
} = require('src/utils/api/apiDetails')

describe('GET /ping', () => {
  let server

  before(() => {
    server = serverCache.get()
  })

  it('returns an Okay result and status code 200', async () => {
    const res = await request(server)
      .get('/ping')
      .expect(200)

    expect(res.body).to.have.property('name', name)
    expect(res.body).to.have.property('description', description)
    expect(res.body).to.have.property('version', version)
    expect(res.body).to.have.property('uptime')
  })
})
