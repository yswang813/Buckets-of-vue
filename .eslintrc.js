module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,
    "semi": [2, "never"],
    "no-console": [0],
    "space-before-function-paren": [2, "always"],
    "prefer-const": [0],
    "eol-last": [0],
    "no-param-reassign": [0],
    "no-shadow": [0],
    "arrow-body-style": [0],
    "comma-dangle": [0],
    "space-in-parens": [0],
    "prefer-rest-params": [0],
    "quote-props": [0],
    "func-names": [0],
    "guard-for-in": [0],
    "object-shorthand": [0],
    "no-use-before-define": [0],
    "computed-property-spacing": [0],
    "consistent-return": [0],
    "camelcase": [0],
    "no-return-assign": [0],
    "no-extend-native": [0],
    "no-else-return": [0],
    "dot-notation": [0],
    "prefer-template": [0],
    "no-restricted-syntax": [0]
  }
}
