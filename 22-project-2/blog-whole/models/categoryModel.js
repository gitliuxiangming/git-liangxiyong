const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  		name:{
  			type:String,
  		},
  		order:{
        type:Number,
        default:1
      }
	});
let categoryModel = mongoose.model('Category',CategorySchema);
module.exports=categoryModel;