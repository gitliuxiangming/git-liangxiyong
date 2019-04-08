const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  		username:{
  			type:String,
  		},
  		password:{
  			type:String,
  		},
  		isAdmin:{
  			type:Boolean,
  			default:false
  		}
	});
let UserModel = mongoose.model('User', UserSchema);
module.exports=UserModel;