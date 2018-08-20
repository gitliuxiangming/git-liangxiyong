/*
* @Author: TomChen
* @Date:   2018-08-02 11:30:37
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-02 16:51:18
*/
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
  	type:String,
    required:[true,'用户名必须'],
    maxlength:[10,'最多10个字符'],
    minlength:[2,'最小2个字符']
  },
  age:{
  	type:Number,
  	default:10,
    min:[1,'最小是1'],
    max:[150,'最大150']
  },
  phone:{
    type:String,
    validate:{
      validator:function(val){
        return /1[358]\d{9}/.test(val)
      },
      message:'{VALUE} 不是合法电话号码'
    }
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