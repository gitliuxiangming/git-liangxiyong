/*
* @Author: TomChen
* @Date:   2018-08-04 17:14:00
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-04 17:14:06
*/
const mongoose = require('mongoose');

const WishSchema = new mongoose.Schema({
  content:{
  	type:String
  },
  color:{
  	type:String
  }
});


const WishModel = mongoose.model('Wish', WishSchema);

module.exports = WishModel;