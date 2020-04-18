// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/scss/utils/_colors.scss";'
      }
    }
  }
}
