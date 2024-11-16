const path = require('path')
const TypescriptAliasPlugin = require('../../typescript-alias-plugin')
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
                test:/\.$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new TypescriptAliasPlugin(path.resolve(__dirname, '../sdk/tsconfig.json'))
    ]
}