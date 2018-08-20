/*
* @Author: TomChen
* @Date:   2018-07-31 16:39:50
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-03 10:54:28
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
	//title : I am title
	/*
	BlogModel.findOne({title:"I am title"},(err,blog)=>{
		if(!err){
			console.log(blog);
			UserModel.findById(blog.author,(err,user)=>{
				if(!err){
					// blog.user = user;
					let result = {};
					result.blog = blog;
					result.user = user;
					console.log(result);
				}else{
					console.log("find user error::",err);
				}
			})
		}else{
			console.log("find blog error::",err)
		}
	})
	*/
	/*
	BlogModel
	.findOne({title:"I am title"})
	.populate('author','name -_id age')
	.then((doc)=>{
		console.log(doc);
	})
	*/

	//有一个方法
	//BlogModel.findBlogs
	//根据条件,得到blog和该blog的作者信息

	/*
	BlogModel.findBlogs({},(err,docs)=>{
		if(!err){
			console.log(docs)
		}else{
			console.log('find blogs error:::',err)
		}
	});
	*/
	BlogModel.findBlogs({title:"I am title"})
	.then((docs)=>{
		console.log(docs)
	})
	.catch((e)=>{
		console.log(e)
	})

});