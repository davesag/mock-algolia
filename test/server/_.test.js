const { put } = require('./serverCache')
const { start } = require('src/server')

let server

before(async () => {
  console.log('starting tests')
  ;({ server } = await start())
  put(server)
})

after(() => {
  console.log('ending tests')
  server.close()
})
