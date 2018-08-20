/*
* @Author: TomChen
* @Date:   2018-08-02 11:30:51
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-03 11:31:59
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