const { expect } = require('chai')

const detailSummariser = require('src/utils/api/detailSummariser')

describe('src/utils/api/detailSummariser', () => {
  const base = '/api/v1'
  const path = '/test'
  const withBase = `${base}${path}`
  const summarise = detailSummariser(base)

  const doTest = ([label, tags, expected]) => {
    context(label, () => {
      it('returns the expected path', () => {
        expect(summarise(path, { tags })).to.equal(expected)
      })
    })
  }

  ;[
    ['without tags', undefined, withBase],
    ['with empty tags', [], withBase],
    ['with non-root tag', ['something'], withBase],
    ['with root tag', ['root'], path]
  ].forEach(doTest)
})
