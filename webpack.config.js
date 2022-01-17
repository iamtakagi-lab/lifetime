const path = require("path")
const isProduction = process.env.NODE_ENV === "production"

/** @type {import("webpack").Configuration} */
const config = {
    mode: isProduction ? "production" : "development",
    entry: {
        main: "./src/index.tsx",
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, "public", "scripts"),
        filename: "[name].js",
        publicPath: "/scripts/"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: { compilerOptions: { module: "esnext", moduleResolution: "node" } },
            }
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    devtool: "source-map",
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
    },
}

module.exports = config