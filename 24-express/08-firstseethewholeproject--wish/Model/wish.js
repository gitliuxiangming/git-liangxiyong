const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  		id:String,
  		color:String,
  		content:String
	});
let UserModel = mongoose.model('Wish', UserSchema);
module.exports=UserModel;