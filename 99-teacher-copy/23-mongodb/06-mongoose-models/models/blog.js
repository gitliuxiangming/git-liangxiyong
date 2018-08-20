/*
* @Author: TomChen
* @Date:   2018-08-02 11:30:51
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-02 11:34:18
*/
const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  author: String,
  title:String,
  content:String
});

const BlogModel = mongoose.model('Blog', BlogSchema);

module.exports = BlogModel;