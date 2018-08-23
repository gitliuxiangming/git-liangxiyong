const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const publicPath="/";
module.exports={
	// mode:'production',
	mode:'development',
	// entry:'./src/index.js',
	entry:'./src/index.js',
	output:{
		filename:'index.js',
		publicPath:publicPath,
		path:path.resolve(__dirname,'dist')
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use: [
		          {
		            loader: MiniCssExtractPlugin.loader,
		            options: {
		              
		            }
		          },
		          "css-loader"
		        ]
			},
		    {
		        test:/\.(png|jpg|gif)$/,
		        use:[
		          'url-loader'
		        ]
		     },
		     {
                test:/\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react','es2015','stage-3'],
                    
                   		plugins: [
					    	["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] 
					    ]
                }   },            
            }
		]
	},

	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
	      // Options similar to the same options in webpackOptions.output
	      // both options are optional
	      filename: "[name].css",
	      chunkFilename: "[id].css"
	    })
	], 
	devServer: {
    	contentBase:'./dist',
    	port:3001,
    	historyApiFallback:true,
    	
   	},

};