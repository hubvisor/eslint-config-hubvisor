module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  extends: [
    'plugin:vue/strongly-recommended',
    'standard'
  ],
  plugins: [ 'vue' ],
  rules: {
    'multiline-ternary': [ 'error', 'never' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always', {
      'singleValue': true,
      'objectsInArrays': true,
      'arraysInArrays': true
    } ],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  overrides: [ {
    files: [
      "**/__tests__/**/*.js",
      "**/*.test.js",
      "**/*.spec.js"
    ],
    env: {
      jest: true
    }
  } ]
}
