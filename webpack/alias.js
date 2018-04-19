const path = require('path')

module.exports = {
  alias: {
    components: path.resolve(__dirname, '../src/portfolio/components'),
    layouts: path.resolve(__dirname, '../src/portfolio/layouts'),
    portfolio: path.resolve(__dirname, '../src/portfolio'),
    Redux: path.resolve(__dirname, '../src/portfolio/redux'),
    templates: path.resolve(__dirname, '../src/portfolio/templates')
  }
}
