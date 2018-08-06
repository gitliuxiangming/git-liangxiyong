//第一步创建服务
const express = require('express');
const swig = require('swig');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//第二部和数据库建立链接
mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true });

const db = mongoose.connection;
    
db.on('error',(err)=>{
    throw err;
});

db.once('open',()=>{
    console.log('成功与集合创建链接');
})

//第三部配置模板
//开发阶段不走缓存
swig.setDefaults({
	cache:false
});
//配置模板
app.engine('html',swig.renderFile);
//配置模板的存放目录
app.set('views','./views');
//注册模板
app.set('view engine','html');

//第四步配置静态文件
app.use(express.static('public'));

//处理post请求（可以直接拿到data数据）
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//第五步配置路由
app.use('/',require('./router/index.js'));



app.listen(3000,()=>{
	console.log('server id running at localhost')
})