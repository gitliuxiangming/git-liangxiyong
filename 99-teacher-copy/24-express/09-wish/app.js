/*
* @Author: TomChen
* @Date:   2018-08-04 17:06:30
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-04 17:15:13
*/
const express = require('express');
const swig = require('swig');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//1.启动数据库
mongoose.connect('mongodb://localhost:27017/kuazhu',{ useNewUrlParser: true });

const db = mongoose.connection;

db.on('error',(err)=>{
	throw err
});

db.once('open',()=>{
	console.log('DB connected....');
});

const app = express();

//2.配置模板
swig.setDefaults({
  cache: false
});
app.engine('html', swig.renderFile);
app.set('views', './views');
app.set('view engine', 'html');

//3.配置静态资源
app.use(express.static('public'));

//4.添加处理post请求的中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//5.处理路由
app.use("/",require('./routes/index.js'))
app.use("/wish",require('./routes/wish.js'))

app.listen(3000,()=>{
	console.log('server is running at 127.0.0.1:3000')
})