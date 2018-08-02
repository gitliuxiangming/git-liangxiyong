const mongoose = require('mongoose');
//1.
mongoose.connect('mongodb://localhost:27017/class/blog',{xxxxx});

const db = mongoose.connection;

db.on('error',()=>{
	throw err;
});

db.once('open', ()=>{
  	//2.
	const UserSchema = new mongoose.Schema({
	  name: String,
	  age:Number,
	  sex:String
	});

	//3.
	const UserModel = mongoose.model('User', UserSchema);
	//4.
	const LBB = new User({ name: 'LBB',age:18,sex:'男' });


	LBB.save(function(err,result){
	    if(!err){

	    }else{

	    }
	});


	User.find();
	User.updata();
	User.remove();
});

































