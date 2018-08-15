module.exports = {
  env: {
    node: true,
    es6: true,
    mocha: true
  },
  space: true,
  prettier: true,
  rules: {
    "indent": ["error", 2],
    "func-names": "off",
    "no-use-before-define": "off",
    "no-unused-vars": ["error", { "args": "none" }],
    "no-warning-comments": "off"
  }
};
