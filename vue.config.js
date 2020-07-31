const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      //路径别名设置
      alias: {
        '@': resolve('src')
      }
    }
  }
}
