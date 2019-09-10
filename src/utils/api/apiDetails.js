const YAML = require('yamljs')
const { summarise } = require('swagger-routes-express')

const apiDefinition = YAML.load(`${__dirname}/../../../api.yml`)
const apiSummary = summarise(apiDefinition)

module.exports = { apiDefinition, apiSummary }
