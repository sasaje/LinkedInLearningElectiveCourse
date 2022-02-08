module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'immutable',
  ],
  rules: {
    'immutable/no-mutation': 2,
  },
};
