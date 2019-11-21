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
    '@typescript-eslint/array-type': [ 'error', { default: 'array-simple' } ],
    // enabled below for ts files only on mixed codebase, see :
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md#configuring-in-a-mixed-jsts-codebase
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-unused-vars': [ 'error', {
      args: 'none'
    } ],
    '@typescript-eslint/no-non-null-assertion': 'off', // this syntax is already a warning !
    '@typescript-eslint/camelcase': [ 'error', {
      properties: 'never' // we need to enforce it
    } ],
    // No-useless-constructor bugs with typescript constructor overload
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error'
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
  }, {
    files: [ '*.ts', '*.tsx' ],
    rules: {
      // false positives on TS code, check upgrades and remove if needed :
      'no-unused-expressions': 'off', // https://github.com/typescript-eslint/typescript-eslint/issues/1220
      'no-undef': 'off', // https://github.com/typescript-eslint/typescript-eslint/issues/1116
      //
      '@typescript-eslint/explicit-member-accessibility': [ 'error', { overrides: { constructors: 'no-public' } } ]
    }
  } ]
}
