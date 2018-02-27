module.exports = {
  env: {
    es6: true,
  },
  plugins: [
    'import',
  ],
  rules: {
    'import/newline-after-import': ['error', { count: 2 }],
    'import/order': ['error', { 'newlines-between': 'always-and-inside-groups' }],
    'import/prefer-default-export': 0,
  },
};
