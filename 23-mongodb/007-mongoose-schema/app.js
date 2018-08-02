const mongoose = require('mongoose');

UserModel = require('./models/user.js');
BlogModel = require('./models/blog.js');

moment = require('moment');

mongoose.connect('mongodb://localhost:27017/message', { useNewUrlParser: true });

const db = mongoose.connection;
	
db.on('error',(err)=>{
	throw err;
});

db.once('open',()=>{
	/*
	UserModel.insertMany({
		name:"Tom",
		age:18,
		sex:"male",	
		locked:"false",
		friends:['LBB1','LBB2']
	},(err,docs)=>{
		if(!err){
			console.log("insert success")
			console.log(docs);
		}else{
			console.log("insert error::",err);
		}
	});
	*/
	/*	
	UserModel.findById('5b62b3fc260a55264c07e80d',(err,docs)=>{
		if(!err){
			// console.log(docs.createdAt);
			// let date = new Date();
			// console.log(date.getFullYear(),"-",date.getMonth()+1,"-",date.getDate()," ",date.getHours(),":",date.getMinutes(),":",date.getSeconds())
			console.log(moment(docs.createdAt).format('YYYY-DD-MM HH:mm:ss'));

		}else{
			console.log("find error::",err);
		}
	})
	*/

	BlogModel.insertMany({
		author: "5b62af7e35bb7f0b1c5065fa",
		title: "今天天气真好",
		content: "哦"
	},(err,docs)=>{
		if (!err) {
			console.log(docs);
		} else {
			console.log('insert error::',err);
		}
	})
	

});
