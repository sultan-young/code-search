const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.tsx',
    output: {
        filename: '[name]-[hash:8].js',
        path: path.resolve(__dirname, 'dist'),
    },
    // 配置这里可以在控制台看到代码中具体的报错行数
    devtool: 'inline-source-map',
    plugins: [
        new HTMLWebpackPlugin({
            title: 'webpack',
            template: './public/index.html'
        }),
        // 新版本clearWebpackPlugin不需要传入清理的目录，其会自动清理webpack配置中output的路径
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-typescript',
                        '@babel/preset-react'
                    ]
                }
            }
        ]
    },
    resolve: {
        // 配置后可以直接通过 ./index 既可引入index.ts|tsx|js. 把最优先匹配的写字最前面
        extensions: [".tsx", ".ts", ".js"],
        // 别名引入
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
}