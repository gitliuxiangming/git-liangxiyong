const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name:{
  	type:String,
  	// required:true,
  	required:[true,'用户名必须填写'],
  	maxlength:[10,'最多10个字符'],
  	minlength:[2,'最2少个字符'],
  },
  age:{
  	type:Number,
  	default:18,
  	min:[18,'最小是18'],
  	max:[70,'最大是70'],
  },
  phone:{
  	type:String,
  	default:17761680517,
  	validate:{
  		validetor:function(val){
  			return	/1[385]\d{9}/.test(val);
  		},
  		message:'{value}不是合法号码'
  	}
  }
  sex:{
  	type:String,
  	enum:['male','female']
  },
  locked:{
  	type:Boolean
  },
  createdAt:{
  	type:Date,
  	default:Date().now
  },
  friends:{
  	type:Array
  }
});

UserSchema.methods.findMyBlogs = function(callback){
    this.model('Blog').find({author:this._id},(err,docs)=>{
        callback(err,docs)
    })
}

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
