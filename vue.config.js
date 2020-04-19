// vue.config.js
'use strict'
const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/scss/utils/_variables.scss";'
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
      ]
    }
  },

  chainWebpack: config => {
    const apiClient = 'data/index.js' // mock or server
    config.resolve.alias.set(
      'api-client',
      path.resolve(__dirname, `./src/api/${apiClient}`)
    )
  }
}
