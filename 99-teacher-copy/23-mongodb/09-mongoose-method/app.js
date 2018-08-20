/*
* @Author: TomChen
* @Date:   2018-07-31 16:39:50
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-03 09:38:16
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
		age:150,
		phone:'13681821788',
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
	*/
	/*
	BlogModel.insertMany({
		author:'5b62c848aa4b2e068123281e',
		title:"I am title2",
		content:"I am content2"
	},(err,docs)=>{
		if(!err){
			console.log(docs)
		}else{
			console.log('insert error::',err.message)
		}		
	})
	*/
	/*
	UserModel.findOne({name:"Tom"},(err,doc)=>{
		// console.log(doc)
		BlogModel.find({author:doc._id},(err,docs)=>{
			console.log(docs)
		})
	})
	*/

	/*
	UserModel.findOne({name:"Tom"},(err,doc)=>{

		doc.findMyBlogs((err,docs)=>{
			console.log(docs)
		})
		
	})
	*/
	UserModel.findByPhone('13681821788',(err,doc)=>{
		if(!err){
			console.log(doc);
		}else{
			console.log('findByPhone error::',err);
		}
	});
});