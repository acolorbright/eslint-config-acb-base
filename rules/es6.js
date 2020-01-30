module.exports = {
  env: {
    es6: true,
  },
  rules: {
    'arrow-parens': ['error', 'always'],
    'no-confusing-arrow': 0,
    'prefer-destructuring': [
      'error', {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      }, {
        enforceForRenamedProperties: false,
      },
    ],
  },
};
