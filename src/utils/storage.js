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

/**
 * Add an object to storage against the supplied key

 * @param {string} key One of `addObject`, `bulkActions`, `deleteObject`, `replaceObject`, `updateObject`, `updateSettings`, or `waitTask`
 * @param {object} value Any value
 */
const addToStorage = (key, value) => {
  if (!storage[key]) {
    logger.info(`addToStorage invoked with unknown key: ${key}`)
    return
  }

  storage[key].push(value)
}

/**
 * Getter for the entire storage object
 * @returns {object} The stored data
 */
const getStorage = () => storage

/**
 * Reset the storage object
 */
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
