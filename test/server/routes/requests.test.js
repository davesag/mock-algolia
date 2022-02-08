const { expect } = require('chai')
const request = require('supertest')
const serverCache = require('test/utils/serverCache')

describe('GET /requests', () => {
  let server

  before(() => {
    server = serverCache.get()
  })

  it('returns an Okay result and status code 200', async () => {
    const res = await request(server).get('/requests').expect(200)

    expect(res.body).to.have.property('addObject')
    expect(res.body.addObject).to.eql([])

    expect(res.body).to.have.property('bulkActions')
    expect(res.body.bulkActions).to.eql([])

    expect(res.body).to.have.property('deleteObject')
    expect(res.body.deleteObject).to.eql([])

    expect(res.body).to.have.property('replaceObject')
    expect(res.body.replaceObject).to.eql([])

    expect(res.body).to.have.property('updateObject')
    expect(res.body.updateObject).to.eql([])

    expect(res.body).to.have.property('updateSettings')
    expect(res.body.updateSettings).to.eql([])

    expect(res.body).to.have.property('waitTask')
    expect(res.body.waitTask).to.eql([])
  })

  it('stores correctly the data', async () => {
    const object1 = {
      objectID: 'object1',
      additionalProp1: {
        key: 'value'
      }
    }

    await request(server).post('/1/indexes/example').send(object1).expect(200)
    const res = await request(server).get('/requests').expect(200)

    expect(res.body).to.have.property('addObject')
    expect(res.body.addObject).to.lengthOf(1)
    expect(res.body.addObject[0]).to.eql(object1)

    expect(res.body).to.have.property('bulkActions')
    expect(res.body.bulkActions).to.eql([])

    expect(res.body).to.have.property('deleteObject')
    expect(res.body.deleteObject).to.eql([])

    expect(res.body).to.have.property('replaceObject')
    expect(res.body.replaceObject).to.eql([])

    expect(res.body).to.have.property('updateObject')
    expect(res.body.updateObject).to.eql([])

    expect(res.body).to.have.property('updateSettings')
    expect(res.body.updateSettings).to.eql([])

    expect(res.body).to.have.property('waitTask')
    expect(res.body.waitTask).to.eql([])
  })
})
