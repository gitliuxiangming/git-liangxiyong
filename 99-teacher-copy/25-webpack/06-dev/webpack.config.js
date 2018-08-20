/*
* @Author: TomChen
* @Date:   2018-08-16 09:57:02
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-16 15:56:47
*/
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
	//指定出口
	output:{
		//出口文件名称
		filename:'[name].[chunkhash].bundle.js',
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
  },
  plugins: [
  	new HtmlWebpackPlugin({
  		template:'./src/view/index.html',
  		filename:'index.html',
  		inject:true,
  		hash:true
  	}),
  	new CleanWebpackPlugin(['dist'])
  ],
  devServer: {
    contentBase: './dist',
    port:3001
  }
}