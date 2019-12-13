module.exports = {
  plugins: ['stylelint-scss'],
  extends: ['stylelint-config-recess-order'],
  rules: {
    'font-family-no-missing-generic-family-keyword': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-trailing-semicolon': 'always',
    'selector-pseudo-element-colon-notation': 'double'
  }
}
