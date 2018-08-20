/*
* @Author: TomChen
* @Date:   2018-07-31 16:39:50
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-02 11:10:31
*/
const mongoose = require('mongoose');


let getRandom = (min,max)=> {	
	return Math.round(min + (max-min)*Math.random());
}

const names = ["Amy","Tom","Leo","Mike","Rose","Ashlee","Ricky","Edum","Andy"]

let getName = ()=>{
	return names[getRandom(0,names.length-1)]
}

let getSex = ()=>{
	if(Math.random()>0.5){
		return 'male'
	}else{
		return 'female'
	}
}


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
	const UserModel = mongoose.model('User', UserSchema);

	//4.用model操作数据库
	/*
	UserModel.insertMany({name:"Tom",age:18,sex:"male"},(err,docs)=>{
		if(!err){
			console.log(docs);
		}else{
			console.log('insert error:::',err);
		}
	})
	*/
	/*
	UserModel.insertMany([{name:"Tom2",age:28,sex:"male"},{name:"Tom2",age:38,sex:"male"}],(err,docs)=>{
		if(!err){
			console.log(docs);
		}else{
			console.log('insert error:::',err);
		}
	})
	*/
	/*
	let promise = UserModel.insertMany([{name:"Tom4",age:28,sex:"male"},{name:"Tom4",age:38,sex:"male"}]);
	
	promise
	.then((docs)=>{
		console.log(docs);
	})
	.catch((e)=>{
		console.log('insert error:::',e);
	})
	*/
	
	//let user = new UserModel({name:"Tom6",age:38,sex:"male"})
	/*
	user.save((err,doc)=>{
		if(!err){
			console.log(doc);
		}else{
			console.log('save error:::',err);
		}		
	})
	*/
	/*
	let promise = user.save();
	
	promise
	.then((doc)=>{
		console.log(doc);
	})
	*/
	/*
	new UserModel({name:"Tom7",age:38,sex:"male"})
	.save()
	.then((doc)=>{
		console.log(doc)
	})
	*/
	/*
	UserModel.create({name:"Tom8",age:38,sex:"male"},(err,docs)=>{
		if(!err){
			console.log(docs);
		}else{
			console.log('create error:::',err);
		}		
	})
	*/
	/*
	UserModel.create({name:"Tom9",age:38,sex:"male"},{name:"Tom10",age:38,sex:"male"},(err,docs)=>{
		if(!err){
			console.log(docs);
		}else{
			console.log('create error:::',err);
		}		
	})
	*/
	/*
	UserModel.create([{name:"Tom10",age:38,sex:"male"},{name:"Tom11",age:38,sex:"male"}],(err,docs)=>{
		if(!err){
			console.log(docs);
		}else{
			console.log('create error:::',err);
		}		
	})
	*/
	/*
	//build test data
	let arr = [];
	for(var i = 0;i<15;i++){
		arr.push({name:getName(),age:getRandom(10,99),sex:getSex()});		
	}
	UserModel.insertMany(arr,(err,docs)=>{
		if(!err){
			console.log(docs);
		}else{
			console.log('insert error:::',err);
		}
	})
	*/
	/*
	UserModel.find({age:{$gt:50}},{name:1,_id:0},(err,docs)=>{
		if(!err){
			console.log(docs);
		}else{
			console.log('find error:::',err);
		}		
	})
	*/
	/*
	UserModel.find({age:{$gt:50}},'name -_id',(err,docs)=>{
		if(!err){
			console.log(docs);
		}else{
			console.log('find error:::',err);
		}		
	})	
	*/
	/*
	UserModel.find({age:{$gt:50}},null,{skip:1,limit:2},(err,docs)=>{
		if(!err){
			console.log(docs);
		}else{
			console.log('find error:::',err);
		}		
	})	
	*/
	/*
	UserModel.find({age:{$gt:50}},null,{sort:{age:-1}},(err,docs)=>{
		if(!err){
			console.log(docs);
		}else{
			console.log('find error:::',err);
		}		
	})
	*/
	/*
	UserModel.findById('5b6267717428ae048fbf5f81','name -_id',(err,doc)=>{
		if(!err){
			console.log(doc);
			// console.log(typeof doc._id);
			// console.log(doc._id.toString())
		}else{
			console.log('find error:::',err);
		}			
	})	
	*/
	/*
	UserModel.findOne({age:{$gt:50}},(err,docs)=>{
		if(!err){
			console.log(docs);
		}else{
			console.log('find error:::',err);
		}		
	})	
	*/
	/*
	UserModel.update({age:{$lt:50}},{$set:{age:19}},(err,result)=>{
		if(!err){
			console.log(result);
		}else{
			console.log('update error:::',err);
		}		
	})
	*/
	/*
	UserModel.update({age:{$lt:50}},{age:29},{ multi: false },(err,result)=>{
		if(!err){
			console.log(result);
		}else{
			console.log('update error:::',err);
		}		
	})	
	*/
	/*
	UserModel.update({age:{$lt:50}},{age:29},{ multi: true },(err,result)=>{
		if(!err){
			console.log(result);
		}else{
			console.log('update error:::',err);
		}		
	})
	*/
	/*
	UserModel.updateOne({age:29},{age:99},(err,result)=>{
		if(!err){
			console.log(result);
		}else{
			console.log('update error:::',err);
		}		
	})	
	*/	
	/*
	UserModel.updateMany({age:29},{age:99},(err,result)=>{
		if(!err){
			console.log(result);
		}else{
			console.log('update error:::',err);
		}		
	})
	*/
	/*
	UserModel.remove({age:60},(err,result)=>{
		if(!err){
			console.log(result);
		}else{
			console.log('remove error:::',err);
		}		
	})
	*/
	/*
	UserModel.remove({age:60})
	.setOptions({single:true})
	.then((result)=>{
		console.log(result);
	})
	*/
	/*
	UserModel.deleteOne({"name" : "Rose"},(err,result)=>{
		if(!err){
			console.log(result);
		}else{
			console.log('deleteOne error:::',err);
		}			
	})
	*/
	/*
	UserModel.deleteMany({age:{$gt:70}},(err,result)=>{
		if(!err){
			console.log(result);
		}else{
			console.log('deleteMany error:::',err);
		}			
	})
	*/

	UserModel.distinct('name',{},(err,result)=>{
		if(!err){
			console.log(result);
		}else{
			console.log('distinct error:::',err);
		}			
	})

});