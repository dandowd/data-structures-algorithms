module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'no-unused-vars': 'off', // disabled in favor of TS warning
    'max-classes-per-file': 'off',
    'no-use-before-define': 'off',
    'no-underscore-dangle': ['error', { allowAfterThis: true }],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['ts'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
