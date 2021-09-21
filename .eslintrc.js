module.exports = {
    env: {
      browser: true,
      es2021: true
    },
    extends: [
      'plugin:react/recommended',
      'standard'
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 12,
      sourceType: 'module'
    },
    plugins: [
      'react'
    ],
    rules: {
      quotes: ['error', 'single'],
      // we want to force semicolons
      semi: ['error', 'always'],
      // we use 2 spaces to indent our code
      indent: ['error', 2],
      // we want to avoid extraneous spaces
      'no-multi-spaces': ['error']
    }
  };
  