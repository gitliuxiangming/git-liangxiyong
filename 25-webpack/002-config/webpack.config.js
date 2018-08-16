const path = require('path');
//导出配置
module.exports = {
	//模式
	mode:'development',
	//指定入口文件
	entry:'./src/index.js',
	//制定出口
	output:{
		//出口文件名称
		filename:'bundle.js',
		//出口文件存储路径
		path:path.resolve(__dirname,'dist')
	}





}