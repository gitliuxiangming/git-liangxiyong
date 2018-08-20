/*
* @Author: TomChen
* @Date:   2018-07-31 16:39:50
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-02 16:52:00
*/
const mongoose = require('mongoose');
const UserModel = require('./models/user.js')
const BlogModel = require('./models/blog.js')
const moment = require('moment')

//1.连接数据库
mongoose.connect('mongodb://localhost:27017/kuazhu',{ useNewUrlParser: true });

const db = mongoose.connection;

db.on('error',(err)=>{
	throw err
});

db.once('open',()=>{
	console.log('db connected ok....');

	UserModel.insertMany({ 
		name: "啊啊啊啊啊啊啊啊啊",
		age:150,
		phone:'17681821788',
		sex:"female",
		locked:false,
		friends:["Amy","Andy"]
	},(err,docs)=>{
		if(!err){
			console.log(docs)
		}else{
			console.log('insert error::',err.message)
		}
	})

});