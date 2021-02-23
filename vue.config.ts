const path = require('path');
function resolve (dir) {
    return path.resolve(__dirname, dir)
}
console.log(path.resolve(__dirname,'./src'))
// 项目的主要配置文件
module.exports = {
  alias: {
    '/@/': path.resolve(__dirname, './src'),
  },
  css:{
    requireModuleExtension: true,
    sourceMap: true,
    loaderOptions: {
      scss: {
        /*sass-loader 8.0语法 */
        //prependData: '@import "~@/styles/variables.scss";',

        // additionalData(content, loaderContext) {
        //   const { resourcePath, rootContext } = loaderContext
        //   const relativePath = path.relative(rootContext, resourcePath)
        //   if (
        //     relativePath.replace(/\\/g, '/') !== 'src/styles/variables.scss'
        //   ) {
        //     return '@import "~@/styles/variables.scss";' + content
        //   }
        //   return content
        // },
      },
    },
  }
}