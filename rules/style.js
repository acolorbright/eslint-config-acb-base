module.exports = {
  rules: {
    'func-names': ['error', 'as-needed'],
    'max-len': 0,
    'no-multi-assign': 0,
    'no-underscore-dangle': ['warn', {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    }],
    'object-curly-newline': ['error', {
      ObjectExpression: { consistent: true },
      ObjectPattern: { consistent: true },
      ImportDeclaration: { multiline: true, minProperties: 4 },
      ExportDeclaration: { consistent: true },
    }],
    'sort-keys': 0,
  },
};
