const CleanWebpackPlugin  = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: {
		app: path.resolve(__dirname, "src", "app.tsx")
	},

	output: {
		filename: "[hash].[id].js",
		chunkFilename: "[hash].[chunkHash].[id].js",
		publicPath: "/"
	},

	plugins: [
		new CleanWebpackPlugin({
			paths: path.resolve(__dirname, "dist"),
			options: {
				verbose: true
			}
		}),
		new HtmlWebpackPlugin({
			chunks: ["app"],
			template: path.resolve(__dirname, "src", "index.html")
		})
	]
}