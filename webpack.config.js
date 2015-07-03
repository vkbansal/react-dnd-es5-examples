var webpack = require("webpack"),
    path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js",
        sourceMapFileName: "bundle.js.map"
    },
    module: {
       loaders: [
           {
               test: /\.js$/,
               loaders: ["babel"],
               exclude: /node_modules/
           }
       ]
    },
    devtool: "source-map",
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            },
            mangle: false
        })
    ]
};
