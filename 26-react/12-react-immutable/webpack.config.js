const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports={
	// mode:'production',
	mode:'development',
	// entry:'./src/index.js',
	entry:'./src/index.js',
	output:{
		filename:'index.js',
		path:path.resolve(__dirname,'dist')
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
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
                        presets: ['env', 'react'],
                    
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
		
	})
	], 
	devServer: {
    	contentBase:'./dist',
    	port:3001
   	},

};