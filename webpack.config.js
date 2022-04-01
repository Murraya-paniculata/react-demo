var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    mode: "development",
    devServer: {
        open: true,
        port: 4534,

    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js)|(jsx)$/,
                use: "babel-loader",
            },
            {
                test: /\.(ts)|(tsx)$/,
                use: "ts-loader"
            },
            {
                test: /\.(css)|(less)$/,
                use: ["style-loader", "css-loader", 'postcss-loader', "less-loader"],
                exclude: /\.module\.scss$/,
            },
            {
            test: /\.module\.less$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
                'less-loader',
            ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/index.html")
        }),
        new CleanWebpackPlugin()
    ]
}