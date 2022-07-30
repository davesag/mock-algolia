const { expect } = require('chai')
const { addToStorage, cleanStorage, getStorage } = require('src/utils/storage')

describe('src/utils/storage', () => {
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
    it('Stores the relevant keys', () => {
      const actions = [
        'addObject',
        'bulkActions',
        'deleteObject',
        'replaceObject',
        'updateObject',
        'updateSettings',
        'waitTask'
      ]

      actions.forEach(action => {
        const object1 = {
          objectID: 'object1',
          additionalProp1: {
            key: 'value'
          }
        }
        addToStorage(action, object1)
        expect(getStorage()).to.eql({
          ...initialStorage,
          [action]: [object1]
        })
        cleanStorage()
      })
    })

    it("doesn't store unknown keys", () => {
      const object1 = {
        objectID: 'object1',
        additionalProp1: {
          key: 'value'
        }
      }
      addToStorage('unknown', object1)
      expect(getStorage()).to.eql(initialStorage)
    })
  })
})
