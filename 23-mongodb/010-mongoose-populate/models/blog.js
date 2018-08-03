const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
	  author:{
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

BlogSchema.statics.findBlogs = function(query = {},callback){
	this.find(query)
	.populate('author')
	.then((docs)=>{
		callback(null,docs);
	})
	.catch((err)=>{
		callback(err);
	})
}

BlogSchema.statics.findBlogs = function(query = {}){
	let promise = new Promise((resolve,reject) => {
		this.findOne(query)
		.populate('author')
		.then((docs)=>{
			console.log(docs);
		})
		.catch((err)=>{
			console.log(err);
		})
	})
	return promise;
}






const BlogModel = mongoose.model('Blog', BlogSchema);

module.exports = BlogModel;
