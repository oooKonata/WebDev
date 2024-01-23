// 引入path包
const path = require('path')

// webpack配置信息
module.exports = {
    // 入口文件
    entry: './src/index.ts',
    // 到包文件目录
    output: {
        // 打包文件路径
        path: path.resolve(__dirname, './dist'),
        // 打包文件名
        filename: 'bundle.js',
    },
}
