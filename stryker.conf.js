module.exports = function(config) {
  config.set({
    maxConcurrentTestRunners: 2,
    mutate: [
      'src/**/*.js',
      '!src/index.js',
      '!src/api/v1/**/*.js',
      '!src/errors.js',
      '!src/utils/api/apiValidator.js',
      '!src/utils/config.js',
      '!src/utils/logger.js'
    ],
    mutator: 'javascript',
    packageManager: 'npm',
    reporters: ['clear-text', 'progress'],
    testRunner: 'mocha',
    mochaOptions: {
      spec: ['./test/unit/**/*.test.js'],
      require: ['./test/unit/testHelper.js']
    },
    transpilers: [],
    testFramework: 'mocha',
    coverageAnalysis: 'perTest',
    thresholds: { high: 80, low: 70, break: null }
  })
}
