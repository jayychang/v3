module.exports = {
  module: {
    rules: [
      ...require('./webpack/babel'),
      ...require('./webpack/styles')
    ]
  },
  resolve: {
    ...require('./webpack/alias')
  },
  plugins: [
    ...require('./webpack/html-plugin')
  ]
}
