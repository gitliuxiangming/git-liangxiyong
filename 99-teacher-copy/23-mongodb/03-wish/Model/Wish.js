/*
* @Author: TomChen
* @Date:   2018-07-27 10:29:02
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-31 15:35:22
*/
const fs = require('fs');
const uuidv1 = require('uuid/v1');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'kuazhu';

let getRandom = (min,max)=> {	
	return Math.round(min + (max-min)*Math.random());
}

let getDB = (callback)=>{

	MongoClient.connect(url, { useNewUrlParser: true },function(err, client) {
	  
	  console.log("Connected successfully to server");

	  //如果没有创建,返回db对象
	  const db = client.db(dbName);

	  callback(db,client)

	})
}


const colorArr = ['#f10','#ff0','#ff5600','#0f1'];

let add = (options,callback)=>{
	getDB((db,client)=>{
		const col = db.collection('wish');
		options._id = uuidv1();
		options.color = colorArr[getRandom(0,colorArr.length-1)];	
		col.insertOne(options,function(err,result){
			if(!err){
				callback(null,options);
			}else{
				callback(err);
			}
			client.close();
		})

	});
}

let get = (callback)=>{

	getDB((db,client)=>{
		const col = db.collection('wish');
		col.find({}).toArray(function(err,docs){
			if(!err){
				callback(null,docs)
			}else{
				callback(err);
			}
			client.close();
		});		
	})
}

let remove = (id,callback)=>{

	getDB((db,client)=>{
		const col = db.collection('wish');
		col.deleteOne({_id:id},function(err,docs){
			if(!err){
				callback(null)
			}else{
				callback(err);
			}
			client.close();
		});		
	})	
}

module.exports = {
	get:get,
	add:add,
	remove:remove
}
