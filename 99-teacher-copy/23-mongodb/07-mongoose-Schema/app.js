/*
* @Author: TomChen
* @Date:   2018-07-31 16:39:50
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-02 15:53:39
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
	/*
	UserModel.insertMany({ 
		name: "Tom",
		age:'18',
		sex:"female",
		locked:false,
		friends:["Amy","Andy"]
	},(err,docs)=>{
		if(!err){
			console.log(docs)
		}else{
			console.log('insert error::',err)
		}
	})
	*/
	/*
	UserModel.findById('5b62aab1e4fbf302f0db948c',(err,doc)=>{
		if(!err){
			// console.log(doc.createdAt)
			//let date = new Date(doc.createdAt);
			//console.log(date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()," ",date.getHours(),":",date.getMinutes(),":",date.getSeconds());
			console.log(moment(doc.createdAt,).format('YYYY - MM - DD HH:mm:ss'))
		}else{
			console.log('find error::',err)
		}
	})
	*/
	BlogModel.insertMany({
		author:"5b62aab1e4fbf302f0db948c",
		title:"今天好难受",
		content:"我收到礼物不见了"

	},(err,docs)=>{
		if(!err){
			console.log(docs)
		}else{
			console.log('insert error::',err)
		}		
	})

});