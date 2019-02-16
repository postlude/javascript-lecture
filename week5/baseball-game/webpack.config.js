const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    'css-loader',
                    'style-loader'
                ]
            },
            {
                test: /\.(png|svg|jpb|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugin: [
        new HtmlPlugin({
            title: '베이스볼 게임',
            filename: 'game.html',
            template: 'game.html'
        })
    ]
}