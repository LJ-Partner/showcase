const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const HappyPack = require('happypack');
var config = {
	entry: {
		app:[
			'babel-polyfill',
			path.resolve(__dirname,'./src/app.js')
		]
	},
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
	module:{
		rules:[
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: ['happypack/loader?id=babel']
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
		new HappyPack({
			// 用唯一的标识符 id 来代表当前的HappyPack 是用来处理一类特定的文件
			id: 'babel',
			// 如何处理 .js 文件，用法和 Loader配置中一样
			threads: 4,
			loaders: [
				{
					loader: 'babel-loader',
					query: {
						presets: ['es2015', 'es2016', 'react', 'stage-2'],
						plugins: ['transform-runtime', 'transform-object-rest-spread', 'babel-polyfill']
					}
				}

			]


		}),
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
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		}),
		new ParallelUglifyPlugin({
			UglifyJSPlugin:{
				sourceMap: false,
				uglifyOptions:{
					ie8: false,
					mangle: {
						reserved: ['$', 'exports', 'require']
					},
					compress: {
						warnings: false,
						drop_debugger: true,
						drop_console: true
					},
					output: {
						comments: false
					},
					warnings: false
				}
        	}		
		}),
		// new UglifyJSPlugin({
        //     sourceMap: false,
        //     uglifyOptions:{
        //     	ie8: false,
        //     	mangle: {
        //         	reserved: ['$', 'exports', 'require']
        //     	},
        //     	 compress: {
	    //             warnings: false,
	    //             drop_debugger: true,
	    //             drop_console: true
        //     	},
        //     	output: {
        //         	comments: false
        //     	},
        //     	warnings: false
        //     }
        // }),
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
	]
}

module.exports = config;