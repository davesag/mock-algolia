const { v4 } = require('uuid')

let task = 0

const makeTaskID = () => ++task

const makeObjectID = () => v4()

module.exports = {
  makeTaskID,
  makeObjectID
}
