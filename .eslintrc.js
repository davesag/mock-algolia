module.exports = {
  extends: ['standard', 'prettier', 'prettier/standard', 'plugin:promise/recommended'],
  plugins: ['prettier', 'promise'],
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    es6: true,
    node: true
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, semi: false }]
  }
}
