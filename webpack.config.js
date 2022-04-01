const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;


module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    target: 'web',
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
        noParse: /antd/,
        rules: [
            {
                test: /\.(js)|(jsx)|(ts)|(tsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader", "ts-loader"]
            },
            {
                test: /\.(css)|(less)$/,
                use: ["style-loader", "css-loader", 'postcss-loader', "less-loader"],
                exclude: /\.module\.scss$/,
            },
            {
            test: /\.(css)|(less)$/,
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
        // new BundleAnalyzerPlugin({
        //     analyzerPort: 8919
        // }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/index.html"),
            title: "a react demo"
        }),
        new CleanWebpackPlugin()
    ]
}