const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var config = {
	entry: {
		app:[
			'webpack-dev-server/client?http://localhost:3333',
			'webpack/hot/only-dev-server',
			'babel-polyfill',
			path.resolve(__dirname,'./src/app.js')
		]
	},
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module:{
		rules:[
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use:{
					loader: 'babel-loader',
					options:{
						presets: ['es2015','es2016','react','stage-2'],
						plugins: ['transform-runtime','transform-object-rest-spread','babel-polyfill']
					}
				}
			},
			{
		        test: /\.css$/,
		        use: ExtractTextPlugin.extract({
		        	use: ['css-loader',{
		          		loader:'postcss-loader',
		          		options:{
		          			plugins:[
		          				require('autoprefixer')()
		          			]
		          		}
		          	}]
		        })
		    },
			{
		        test: /\.less$/,
		        use: ExtractTextPlugin.extract({
		        	fallback: 'style-loader',
		          	use: ['css-loader',{
		          		loader:'postcss-loader',
		          		options:{
		          			plugins:[
		          				require('autoprefixer')()
		          			]
		          		}
		          	},'less-loader'],

		        })
		    },
		    {
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader?limit=10000&name=images/[name].[ext]'
					}
				]
			},
	        {
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'url-loader?limit=10000&name=svg/[name].[ext]' 
					}
				]
			},
			{
				test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'url-loader?limit=10000&name=fonts/[name].[ext]' 
					}
				]
			},
	        {
				test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'url-loader?limit=10000&name=fonts/[name].[ext]' 
					}
				]
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'url-loader?limit=10000&name=fonts/[name].[ext]' 
					}
				]
			},
	        {
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'url-loader?limit=10000&name=fonts/[name].[ext]' 
					}
				]
			}
		]
	},
	plugins: [
		new AssetsPlugin({
            filename: 'demo.map.json',
            path: path.resolve(__dirname,'dist'),
            prettyPrint: true,
            fullPath: true,
            processOutput: function(assets) {
                var now = Date.now();

                for (var i in assets) {

                    for (var j in assets[i]) {

                        assets[i][j] = assets[i][j] + "?v=" + now.toString();
                    }

                }
                return JSON.stringify(assets);
            }
        }),
		
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin({
			filename: 'css/[name].css'
		}),
		new HtmlWebpackPlugin({
            title: 'react-show-app',
            filename: path.resolve(__dirname,'dist/index.html'),
            template: path.resolve(__dirname,'public/index.html'),
            inject: "body",
            hash: true // 为静态资源生成hash值
        }),
        new CleanWebpackPlugin([path.resolve(__dirname, 'dist')])
	],
	devServer: {
        contentBase: path.join(__dirname),
        port: 3333,
        compress:true
    }
}

module.exports = config;