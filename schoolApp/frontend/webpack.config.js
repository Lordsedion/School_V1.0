const path = require("path")
const webpack = require('webpack')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "static/frontend"),
        filename: "[name].js",
        // publicPath: '/',
    },
     module: {
        rules: [
            {
                test: /(bg).(png|jpe?g|gif|jfif|pdf)$/i,
                exclude: [/node_modules/, path.resolve(__dirname, "static/frontend/bg")],
                use: {
                    loader: 'file-loader',
                },
            },
            {
                test:/\.(jsx|js)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
            },
            {
                test: /\.css$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                ],
            },
        ],
     },
     optimization: {
        minimize: true,
     },
     plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production"),
            },
        }),
     ],
}