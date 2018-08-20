/*
* @Author: TomChen
* @Date:   2018-08-02 11:30:51
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-03 10:52:58
*/
const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  author: {
  	type:mongoose.Schema.Types.ObjectId,
  	ref:'User'
  },
  title:{
  	type:String
  },
  content:{
  	type:String
  }
});

/*
BlogSchema.statics.findBlogs = function(query={},callback){
  this.find(query)
  .populate('author')
  .then((docs)=>{
    callback(null,docs)
  })
  .catch((e)=>{
    callback(e)
  })
}
*/

BlogSchema.statics.findBlogs = function(query={}){
  let promise  = new Promise((resolve,reject)=>{
    this.find(query)
    .populate('author')
    .then((docs)=>{
      resolve(docs)
    })
    .catch((e)=>{
      reject(e)
    })
  });
  return promise;
}

const BlogModel = mongoose.model('Blog', BlogSchema);

module.exports = BlogModel;