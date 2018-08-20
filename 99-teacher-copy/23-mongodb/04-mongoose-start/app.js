/*
* @Author: TomChen
* @Date:   2018-07-31 16:39:50
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-31 17:25:16
*/
const mongoose = require('mongoose');

//1.连接数据库
mongoose.connect('mongodb://localhost:27017/kuazhu',{ useNewUrlParser: true });

const db = mongoose.connection;

db.on('error',(err)=>{
	throw err
});

db.once('open',()=>{
	console.log('db connected ok....');
	
	//2.定义schema
	const UserSchema = new mongoose.Schema({
	  name: String,
	  age:Number,
	  sex:String
	});

	//3.用定义好的schema生成model
	//注意:model的第一个参数会生成数据库中集合的名称,数据库中会把他变成小写加复数
	const User = mongoose.model('User', UserSchema);

	//4.用model操作数据库
	
	//CRUD

	/*
	//插入
	const user = new User({name:"Tom",age:18,sex:"male"});

	user.save((err,doc)=>{
		if(!err){
			console.log(doc.toString())
		}else{
			console.log('save data error::',err);
		}
	})
	*/
	/*
	//查找
	User.find({name:"Tom"},(err,docs)=>{
		if(!err){
			console.log(docs.toString())
		}else{
			console.log('find data error::',err);
		}
	})
	*/
	/*
	//更新
	User.update({name:"Tom"},{$set:{age:99}},(err,result)=>{
		if(!err){
			console.log(result)
		}else{
			console.log('update data error::',err);
		}
	})
	*/
	
	//删除
	User.remove({name:"Tom"},(err,result)=>{
		if(!err){
			console.log(result)
		}else{
			console.log('update data error::',err);
		}
	})	

});