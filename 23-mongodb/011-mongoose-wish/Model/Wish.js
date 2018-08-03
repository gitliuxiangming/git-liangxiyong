const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
  
});

UserSchema.methods.findMyBlogs = function(callback){
    this.model('Blog').find({author:this._id},(err,docs)=>{
        callback(err,docs)
    });
}

UserSchema.statics.findByPhone = function(phone,callback){
  this.findOne({phone:phone},(err,doc)=>{
      callback(err,doc);
  })
}

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;