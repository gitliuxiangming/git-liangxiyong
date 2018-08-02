const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	  name:{
	  	type:String,
	  },
	  age:{
	  	type:Number,
	  },
	  sex:{
	  	type:String,
	  	enum:['male','female']
	  },
	  locked:{
	  	type:Boolean
	  },
	  createdAt:{
	  	type:Date,
	  	default:Date().now
	  },
	  friends:{
	  	type:Array
	  }
	});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
