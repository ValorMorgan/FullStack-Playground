const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const MODE ="development";

module.exports = merge(common, {
	mode: MODE,

	devtool: "inline-source-map",

	module: {
		rules: [{
			test: /(?!\.test)\.jsx?$/,
			include: [
				path.resolve(__dirname, "src")
			],
			use: [
				"babel-loader"
			]
		}, {
			test: /(?!\.test)\.tsx?$/,
			include: [
				path.resolve(__dirname, "src")
			],
			use: [
				"babel-loader",
				{ loader: "ts-loader", options: { allowTsInNodeModules: true } }
			]
		}, {
			test: /.css$/,
			use: [
				"style-loader",
				"css-loader"
			]
		}, {
			test: /.less$/,
			use: [
				"style-loader",
				"css-loader",
				"less-loader"
			]
		}]
	},

	plugins: [
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify(MODE)
		}),

		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	],

	devServer: {
		contentBase: path.join(__dirname, "dist"),
		host: "localhost",
		port: 9000,
		publicPath: "/",
		openPage: "/",
		compress: true,
		historyApiFallback: true
	}
});