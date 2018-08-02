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
	
	UserModel.insertMany({
		name:"LBB",
		age:23,
		phone:'15139103727'
		sex:"male",	
		locked:"false",
		friends:['LBB1','LBB2']
	},(err,docs)=>{
		if(!err){
			console.log("insert success")
			console.log(docs);
		}else{
			console.log("insert error::",err.message);
		}
	});
	
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

	

});
