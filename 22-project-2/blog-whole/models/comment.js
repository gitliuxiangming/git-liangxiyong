const mongoose = require('mongoose');
const pagination = require('../util/pagination.js')

const CommentSchema = new mongoose.Schema({
  		article:{
  			type:mongoose.Schema.Types.ObjectId,
        ref:'Article'
  		},
  		content:{
  			type:String,
  		},
      user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
      },
      createAt:{
        type:Date,
        default:Date.now
      },
	});

CommentSchema.statics.getPaginationComments = function(req,query={}){
    return new Promise((resolve,reject)=>{
      let options = {
        page: req.query.page,//需要显示的页码
        model:this, //操作的数据模型
        query:query, //查询条件
        projection:'-__v', //投影，
        sort:{_id:-1}, //排序
        populate:[{path:'article',select:'title'},{path:'user',select:'username'}]
      }
      pagination(options)
      .then((data)=>{
        resolve(data); 
      })
    })
 }


let CommentModel = mongoose.model('Comment', CommentSchema);
module.exports=CommentModel;