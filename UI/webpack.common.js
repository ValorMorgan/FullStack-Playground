const CleanWebpackPlugin  = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: {
		index: path.resolve(__dirname, "src", "index.tsx")
	},

	output: {
		filename: "[hash].[name].js",
		chunkFilename: "[hash].[chunkHash].[name].js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		sourcePrefix: ""
	},

	node: {
		fs: "empty"
	},

	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".less"]
	},

	module: {
		rules: [{
			test: /\.(png|jpg|gif|svg|ttf|woff|woff2|eot)$/,
			use: [{
				loader: "file-loader",
				options: {
					useRelativePath: false
				}
			}],
		}]
	},

	plugins: [
		new CleanWebpackPlugin({
			paths: ["dist"],
			options: {
				verbose: true
			}
		}),

		new HtmlWebpackPlugin({
			chunks: ["index"],
			template: path.resolve(__dirname, "src", "index.html")
		}),

		new CopyWebpackPlugin([{
			from: "src/assets",
			to: "assets"
		}])
	]
};