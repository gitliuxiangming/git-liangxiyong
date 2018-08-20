/*
* @Author: TomChen
* @Date:   2018-08-02 11:30:51
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-02 15:47:16
*/
const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  author: {
  	type:mongoose.Schema.Types.ObjectId
  },
  title:{
  	type:String
  },
  content:{
  	type:String
  }
});

const BlogModel = mongoose.model('Blog', BlogSchema);

module.exports = BlogModel;