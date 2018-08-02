const mongoose = require('mongoose');
//1.
mongoose.connect('mongodb://localhost:27017/message', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error',(err)=>{
	throw err;
});

db.on('open',()=>{
  	//2.
	const UserSchema = mongoose.Schema({
	  name: String,
	  age:Number,
	  sex:String
	});

	//3.
	const UserModel = mongoose.model('User', UserSchema);
	//4.
	/*
	UserModel.insertMany([{},{}],(err,docs)=>{
		if(!err){

		}else{

		}
	})
	*/
	/*
	let promise = UserModel.insertMany([{},{}]);

	promise.then((docs)=>{

	})
	*/
	/*
	let user = new UserModel({});
	user.save((err.docs)=>{

	});
	*/
	
	 new UserModel({name:"LBB1",age:23,sex:"男"})
	 .save()

	 .then((docs)=>{
		console.log(docs);
	})
	




});
