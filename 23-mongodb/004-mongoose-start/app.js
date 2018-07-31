const mongoose = require('mongoose');

mongoose.connect('mongodb:/localhost:27017/blog');

const db = mongoose.connection;

db.on('error',()=>{
	throw err;
});

db.once('open', ()=>{
  
	const UserSchema = new mongoose.Schema({
	  name: String,
	  age:Number,
	  sex:String
	});


	const User = mongoose.model('User', UserSchema);

	const LBB = new User({ name: 'LBB',age:18,sex:'男' });

	User.save(function(err,result){
	    if(!err){

	    }else{

	    }
	});





});

































