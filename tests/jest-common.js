const config = require('kcd-scripts/jest')

module.exports = {
  ...config,
  // we have no coverageThreshold on this project...
  coverageThreshold: {},
  watchPlugins: [...config.watchPlugins, 'jest-watch-select-projects'],
}
