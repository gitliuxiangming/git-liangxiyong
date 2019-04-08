const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  		name:{
  			type:String
  		},
  		path:{
  			type:String
  		}
	});
let ResourceModel = mongoose.model('Resource', ResourceSchema);
module.exports=ResourceModel;