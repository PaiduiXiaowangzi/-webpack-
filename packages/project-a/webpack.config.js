const path = require('path')
const TypescriptAliasPlugin = require('../../typescript-alias-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias:{
            // '@sdk': path.resolve(__dirname, '../sdk/src'),
        },
    },
    module: {
        rules: [
            {
                test:/\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new TypescriptAliasPlugin(path.resolve(__dirname, './tsconfig.json')),
        new HtmlWebpackPlugin({
            template: './src/index.html', // 指定模板路径
        }),
    ]
}