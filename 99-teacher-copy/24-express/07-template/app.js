/*
* @Author: TomChen
* @Date:   2018-08-04 14:40:13
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-04 15:37:25
*/
const express = require('express');
const swig = require('swig')

const app = express();

//开发阶段设置不走缓存
swig.setDefaults({
  cache: false
});

//1.配置模板
app.engine('html', swig.renderFile);

//2.配置模板的存放目录
app.set('views', './views')

//3.注册模板
app.set('view engine', 'html')

app.get('/data',(req,res)=>{
	res.render('data',{
		title:'跨猪网',
		content:'欢迎来跨猪网学习',
		obj:{
			name:"Tom",
			age:18
		},
		name:"Leo",
		arr:["Tom","Amy","Leo","Mike","Andy"]
	});
})
app.get('/',(req,res)=>{
	res.render('index')
})
app.get('/list',(req,res)=>{
	res.render('list')
})
app.get('/detail',(req,res)=>{
	res.render('detail')
})
app.listen(3000,()=>{
	console.log('server is running....')
})