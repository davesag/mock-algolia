const env = process.env.NODE_ENV || /* istanbul ignore next */ 'development'
const PORT = process.env.PORT || 3000

module.exports = {
  PORT,
  env
}
