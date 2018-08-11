const mongoose = require('mongoose');

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
let CommentModel = mongoose.model('Comment', CommentSchema);
module.exports=CommentModel;