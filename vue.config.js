const path = require('path')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  // 对象模式
  configureWebpack: {
    resolve: {
      //路径别名设置
      alias: {
        '@': resolve('src'),
      },
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            // 其他压缩选项
            compress: {
              drop_console: false, //注释console
              pure_funcs: ['console.log'], //丢弃console.log
            },
            warnings: false, //显示警告
          },
        }),
      ],
    },
  },

  // 函数模式
  // configureWebpack: (config) => {
  //   if (process.env.NODE_ENV === 'production') {
  //     // 为生产环境修改配置...
  //     //路径别名设置
  //     config.resolve.alias['@'] = resolve('src')
  //     config.optimization.minimizer.push(
  //       new UglifyJsPlugin({
  //         uglifyOptions: {
  //           // 其他压缩选项
  //           compress: {
  //             drop_console: false, //注释console
  //             pure_funcs: ['console.log'], //丢弃console.log
  //           },
  //           warnings: false, //显示警告
  //         },
  //       })
  //     )
  //   }
  // },
  productionSourceMap: false,
  devServer: {
    port: 8888,
  },
}
