const path = require('path');
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
		filename:'[name].bundle.js',
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
	}






}