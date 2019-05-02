module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  extends: [
    // 'plugin:@typescript-eslint/recommended',
    'plugin:vue/strongly-recommended',
    'standard'
  ],
  plugins: [
    '@typescript-eslint',
    'vue'
  ],
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
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    // typescript rules
    '@typescript-eslint/indent': [ 'error', 2 ],
    '@typescript-eslint/member-delimiter-style': [ 'error', {
      multiline: {
          delimiter: 'none',
          requireLast: false
      },
      singleline: {
          delimiter: 'comma',
          requireLast: false
      }
    } ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/array-type': [ 'error', 'array-simple' ],
    '@typescript-eslint/explicit-member-accessibility': [ 'error', {
      overrides: {
        constructors: 'no-public'
      }
    } ],
    '@typescript-eslint/no-unused-vars': [ 'error', {
      args: 'none'
    } ],
    '@typescript-eslint/no-non-null-assertion': 'off', // this syntax is already a warning !
    '@typescript-eslint/camelcase': [ 'error', {
      properties: 'never' // we need to enforce it
    } ]
  },
  overrides: [ {
    files: [
      '**/__tests__/**/*.{js,ts}',
      '**/*.test.{js,ts}',
      '**/*.spec.{js,ts}'
    ],
    env: {
      jest: true
    }
  } ]
}
