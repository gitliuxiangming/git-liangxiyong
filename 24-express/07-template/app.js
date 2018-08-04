const express = require('express');
const swig = require('swig');
const app = express();

//开发阶段不走缓存
swig.setDefaults({
	cache:false
});
//1.配置模板
app.engine('html',swig.renderFile);
//2.配置模板的存放目录
app.set('views','./views');
//3.注册模板
app.set('view engine','html');

app.get('/',(req,res)=>{
	res.render('index',{
		title:'发财网',
		content:'我是服务添加的！！！',
		obj:{
			name:'LBB',
			age:23
		},
		name:'xxx',
		arr:['LBB1','LBB2','LBB3','LBB4','LBB5','LBB6'],
	})
});
app.get('/list',(req,res)=>{
	res.render('list');
});
app.get('/detail',(req,res)=>{
	res.render('detail');
})

app.listen(3000,()=>{
	console.log('server is running ...')
})
