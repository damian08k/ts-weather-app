const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    output: {
        publicPath: "public",
        filename: "bundle.js",
        path: path.resolve(__dirname, "public"),
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: "ts-loader",
                include: [path.resolve(__dirname, "src")],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
};
