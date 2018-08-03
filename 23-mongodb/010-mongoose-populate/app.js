const mongoose = require('mongoose');

UserModel = require('./models/user.js');
BlogModel = require('./models/blog.js');


mongoose.connect('mongodb://localhost:27017/message', { useNewUrlParser: true });

const db = mongoose.connection;
	
db.on('error',(err)=>{
	throw err;
});

db.once('open',()=>{
	/*
	BlogModel.insertMany({
		author:'5b63b0bd04247c048cb0ae72',
		title:'I am title',
		content:'I am content'
	},(err,doc)=>{
		if(!err){
			console.log(doc)
		}else{
			console.log('insert error::',err)
		}
	})
	*/
	/*
	BlogModel.findOne({title:'I am title'})
	.populate('author','name')
	.then((doc)=>{
		console.log(doc);
	})
	*/
	BlogModel.findBlog({title: "I am title"},(err,doc)=>{
		if(!err){
			console.log(doc);
		}else{
			console.log('findBlog error::',err);
		}
	})
	
});
