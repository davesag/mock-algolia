let server

const get = () => server

const put = value => {
  server = value
}

module.exports = { get, put }
