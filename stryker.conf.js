module.exports = function(config) {
  config.set({
    mutate: [
      'src/**/*.js',
      '!src/index.js',
      '!src/api/v1/**/*.js',
      '!src/errors.js',
      '!src/utils/config.js',
      '!src/utils/logger.js'
    ],
    mutator: 'javascript',
    packageManager: 'npm',
    reporters: ['clear-text'],
    testRunner: 'mocha',
    mochaOptions: {
      spec: ['./test/unit/**/*.test.js'],
      require: ['./test/unitTestHelper.js']
    },
    transpilers: [],
    testFramework: 'mocha',
    coverageAnalysis: 'perTest',
    thresholds: { high: 80, low: 70, break: null }
  })
}
