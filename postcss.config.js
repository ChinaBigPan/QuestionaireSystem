module.exports = {
  // parser: 'sugarss',
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
    'postcss-preset-env': {
      'stage': 3,
      'nesting-rules': true
    },
    'cssnano': {}
  }
}