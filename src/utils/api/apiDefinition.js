const YAML = require('yamljs')
const summarise = require('src/utils/api/summariseApi')

const apiDefinition = YAML.load('api.yml')
const apiSummary = summarise(apiDefinition)

module.exports = { apiDefinition, apiSummary }
