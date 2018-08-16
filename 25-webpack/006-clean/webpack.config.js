const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//导出配置
module.exports = {
	//模式
	mode:'development',
	//指定入口文件
	entry:{
		common:'./src/page/common/index.js',
		index:'./src/page/index/index.js'
	},
	//制定出口
	output:{
		//出口文件名称
		filename:'[name].[chunkhash].bundle.js',
		//出口文件存储路径
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
				test:/\.(png|svg|jpg|gif)$/,
				use:[{
					loader:'url-loader'
				}]
			}
		]
	},
	devServer: {
     	contentBase: './dist',
     	port:3001
   	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./src/view/index.html',
			filename:'index.html',
			inject:true,
			hash:true
		}),
		new CleanWebpackPlugin(['dist'])
	]






}