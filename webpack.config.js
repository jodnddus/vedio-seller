const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.port;

module.exports = {
    mode: 'development',
    output: {
        path: __dirname + 'public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        camelCase: true,
                        sourceMap: true
                    }
                },
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        port: port,
        open: true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'public/index.html',
          // favicon: 'public/favicon.ico' 파비콘은 준비가 되어있지 않아 주석처리합니다.
        })
    ],
}