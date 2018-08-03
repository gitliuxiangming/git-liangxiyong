const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  name: {
    type:String,
    // require: true
    required: [true,'必须输入用户名'],
    maxlength: [10,'最多10个字符'],
    minlength:[2,'最少2个字符']
  },
  age: {
    type:Number,
    default:10, // 设置默认值
    min: [1,'最小1岁'],
    max: [120,'最大120岁']
  },
  sex: {
    type:String,
    enum:['male','female'] // 枚举，约束数据
  },
  phone: {
    type:String,
    validator:function(val){
      return /1[358]\d{9}/.test(val)
    },
    message:'{VALUE} 不合法'
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

UserSchema.statics.findByPhone = function(phone,callback){
  this.findOne({phone:phone},(err,doc)=>{
      callback(err,doc);
  })
}

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
