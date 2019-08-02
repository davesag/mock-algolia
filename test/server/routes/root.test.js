const request = require('supertest')
const serverCache = require('test/utils/serverCache')

describe('GET /', () => {
  const expected = JSON.stringify([
    {
      version: 1,
      path: '/api/v1'
    }
  ])

  let server

  before(() => {
    server = serverCache.get()
  })

  it('returns the expected values with status code 200', async () =>
    request(server)
      .get('/')
      .expect(200, expected))
})
