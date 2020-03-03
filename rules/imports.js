module.exports = {
  env: {
    es6: true,
  },
  plugins: [
    'import',
  ],
  rules: {
    'import/newline-after-import': ['error', { count: 1 }],
    'import/order': ['error', {
      'newlines-between': 'always-and-inside-groups',
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
    }],
    'import/prefer-default-export': 0,
  },
};
