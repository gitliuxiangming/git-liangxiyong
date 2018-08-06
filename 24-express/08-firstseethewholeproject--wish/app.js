//1创建服务器
const express = require('express')
const app = express();
const swig=require('swig');
const bodyParser=require('body-parser');
//2链接数据库
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/kuazhu',{ useNewUrlParser: true });
const db = mongoose.connection;


db.on('error', function(err){
	throw err;
});
db.once('open', function() {
	console.log('mongoose ok...')
});
//处理模板

swig.setDefaults({
	cache:false
});
app.engine('html',swig.renderFile);

app.set('views','./views');

app.set('view engine','html');

//处理静态资源

app.use(express.static('public'));


//处理路由
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/',require('./router/wish.js'));



app.listen(3000,()=>{
	console.log('server ok....');
})