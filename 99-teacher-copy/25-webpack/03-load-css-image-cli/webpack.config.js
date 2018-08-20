/*
* @Author: TomChen
* @Date:   2018-08-16 09:57:02
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-16 11:04:43
*/
const path = require('path');

//导出配置
module.exports = {
	//模式
	mode:'development',
	//指定入口文件
	entry:'./src/index.js',
	//指定出口
	output:{
		//出口文件名称
		filename:'bundle.js',
		//出口文件存储路径
		path:path.resolve(__dirname,'dist')
	},
	//配置loader
    module: {
      rules: [
      	//处理css文档的loader
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        //处理图片loader
		{
	        test: /\.(png|jpg|gif)$/,
	        use: [
	          {
	            loader: 'url-loader'
	          }
	        ]
      	}        
      ]
    }	
}