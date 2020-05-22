const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist/assets'),
    publicPath: '/'
	},
	plugins: [
		new HTMLPlugin({
			filename: 'index.html',
			template: './src/index.html'
		}),
    new MiniCssExtractPlugin(
			{
			filename: 'styles.css',
			chunkFilename: 'styles.css',
			}),
		new OptimizeCssAssetsPlugin(
			{
			assetNameRegExp: /styles\.css$/g,
			cssProcessor: require('cssnano'),
			cssProcessorPluginOptions: 
				{
				preset: ['default', { discardComments: { removeAll: true } }],
				},
			canPrint: true
			}),
	],
  module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
        test: /\.css$/,
        use: [
          {loader: MiniCssExtractPlugin.loader}, 'css-loader']
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	resolve: {
		extensions: ['.js']
	}
};