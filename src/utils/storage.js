const logger = require('src/utils/logger')
let storage = {
  addObject: [],
  bulkActions: [],
  deleteObject: [],
  replaceObject: [],
  updateObject: [],
  updateSettings: [],
  waitTask: []
}

const addToStorage = (key, value) => {
  if (key in storage) {
    return storage[key].push(value)
  }

  logger.info(`addToStorage invoked with unknown key: ${key}`)
}

const getStorage = () => storage
const cleanStorage = () => {
  storage = {
    addObject: [],
    bulkActions: [],
    deleteObject: [],
    replaceObject: [],
    updateObject: [],
    updateSettings: [],
    waitTask: []
  }
}

module.exports = {
  addToStorage,
  getStorage,
  cleanStorage
}
