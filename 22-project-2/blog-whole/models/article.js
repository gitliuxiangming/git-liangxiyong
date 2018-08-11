const mongoose = require('mongoose');
const pagination = require('../util/pagination.js');
const ArticleSchema = new mongoose.Schema({
  		category:{
  			type:mongoose.Schema.Types.ObjectId,
  			ref:'Category'
  		},
  		user:{
  			type:mongoose.Schema.Types.ObjectId,
  			ref:'User'
  		},
  		title:{
  			type:String,
  		},
  		intro:{
  			type:String,
  		},
  		content:{
  			type:String,
  		},
  		click:{
  			type:Number,
  			default:0
  		},
  		createAt:{
  			type:Date,
  			default:Date.now
  		},
	});

ArticleSchema.statics.getPaginationArticles = function(req,query={}){
    return new Promise((resolve,reject)=>{
      let options = {
        page: req.query.page,//需要显示的页码
        model:this, //操作的数据模型
        query:query, //查询条件
        projection:'-__v', //投影，
        sort:{_id:-1}, //排序
        populate:[{path:'category',select:'name'},{path:'user',select:'username'}]
      }
      pagination(options)
      .then((data)=>{
        resolve(data); 
      })
    })
 }



let ArticleModel = mongoose.model('Article',ArticleSchema);
module.exports=ArticleModel;