module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': 'off',
  },
  // settings: {
  //   'import/resolver': {
  //     'babel-module': {},
  //     node: {
  //       extensions: ['.js'],
  //       moduleDirectory: ['node_modules', '.'],
  //     },
  //   },
  // },
};
