const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "assets/js/main.js",
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./assets/css/[name].css",
        }),
    ],
};
