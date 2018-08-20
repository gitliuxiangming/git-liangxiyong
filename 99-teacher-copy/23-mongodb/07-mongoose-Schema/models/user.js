/*
* @Author: TomChen
* @Date:   2018-08-02 11:30:37
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-02 14:52:19
*/
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
  	type:String
  },
  age:{
  	type:Number,
  	default:10
  },
  sex:{
  	type:String,
  	enum:["male","female"]	
  },
  locked:{
  	type:Boolean
  },
  createdAt:{
  	type:Date,
  	default:Date.now
  },
  friends:{
  	type:Array
  }
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;