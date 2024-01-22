const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                // css
                // webpack 根据正则表达式确定应该查找哪些文件，并将其提供给指定的 loader
                // 在此示例中，所有以 .css 结尾的文件，都将被提供给 style-loader 和 css-loader
                test: /\.css$/i,
                // loader是逆序执行，第一个 loader 将其结果（被转换后的资源）传递给下一个 loader，依此类推
                // 最后，webpack 期望链中的最后的 loader 返回 JavaScript
                use: ['style-loader', 'css-loader'],
            },
            {
                // 图片
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                // 字体
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                // 数据csv，tsv
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                // 数据xml，默认支持json
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
        ],
    },
}
