const ROOT = 'root'

const detailSummariser = base => (path, { tags }) =>
  Array.isArray(tags) && tags[0] === ROOT ? path : `${base}${path}`

module.exports = detailSummariser
