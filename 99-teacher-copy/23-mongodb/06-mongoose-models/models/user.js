/*
* @Author: TomChen
* @Date:   2018-08-02 11:30:37
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-02 11:31:53
*/
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  age:Number,
  sex:String
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;