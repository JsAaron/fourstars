const fs = require('fs')
const path = require('path')
const appJsonPath = path.join(
  __dirname,
  'unpackage/dist',
  process.env.NODE_ENV === 'production' ? 'build' : 'dev',
  process.env.UNI_PLATFORM,
  'app.json'
)

module.exports = {
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config.devtool = 'eval-cheap-module-source-map'
    }
  },
  css: {
    sourceMap: process.env.NODE_ENV === 'development'
  },
  devServer: {
    port: 8899,
    disableHostCheck: true,
    proxy: {
      '/base-api': {
        target: 'https://fourstars.net.cn',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/base-api': ''
        }
      }
    }
  }
}
