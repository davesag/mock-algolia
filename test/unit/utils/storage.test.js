const { expect } = require('chai')
const proxyquire = require('proxyquire')
const mockLogger = require('test/utils/mockLogger')

describe('src/utils/storage', () => {
  const logger = mockLogger()
  const { addToStorage, cleanStorage, getStorage } = proxyquire('src/utils/storage', {
    'src/utils/logger': logger
  })

  const initialStorage = {
    addObject: [],
    bulkActions: [],
    deleteObject: [],
    replaceObject: [],
    updateObject: [],
    updateSettings: [],
    waitTask: []
  }

  describe('#getStorage', () => {
    it('returns initial storage', () => {
      expect(getStorage()).to.eql(initialStorage)
    })
  })

  describe('#addToStorage', () => {
    const obj = {
      objectID: 'obj',
      additionalProp1: {
        key: 'value'
      }
    }

    context('when given known keys', () => {
      Object.keys(initialStorage).forEach(key => {
        context('given key ' + key, () => {
          before(() => {
            addToStorage(key, obj)
          })

          after(cleanStorage)

          it('stored the data', () => {
            expect(getStorage()).to.eql({
              ...initialStorage,
              [key]: [obj]
            })
          })
        })
      })
    })

    context('given an unknown key', () => {
      before(() => {
        addToStorage('unknown', obj)
      })

      after(cleanStorage)

      it('does not store it', () => {
        expect(getStorage()).to.eql(initialStorage)
      })
    })
  })
})
