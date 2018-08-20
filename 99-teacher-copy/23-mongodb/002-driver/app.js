/*
* @Author: TomChen
* @Date:   2018-07-31 10:04:04
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-31 11:13:17
*/
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'kuazhu';

MongoClient.connect(url, { useNewUrlParser: true },function(err, client) {
  
  console.log("Connected successfully to server");

  //如果没有创建,返回db对象
  const db = client.db(dbName);

  //插入

  //如果没有创建,返回集合
  const col = db.collection('wish');

  /*
  //插入操作
  col.insertMany([{content:"我想变美"},{content:"我想变胖"}],function(err,result){
  	if(!err){
  		console.log(result)
  	}else{
  		console.log('insert error:::',err);
  	}
  	client.close();
  });
  */

  /*
  col.find({}).toArray(function(err,docs){
  	if(!err){
  		console.log(docs)
  	}else{
  		console.log('find error:::',err);
  	}
  	client.close();
  });
  */
  /*
  col.find({"content" : "我想变美"}).toArray(function(err,docs){
  	if(!err){
  		console.log(docs)
  	}else{
  		console.log('find error:::',err);
  	}
  	client.close();
  });
  */

  /*
  col.updateOne({"content" : "我想变美"},{$set:{color:'red'}},function(err,result){
  	if(!err){
  		console.log(result.result)
  	}else{
  		console.log('insert error:::',err);
  	}
  	client.close();  	
  })
  */

  col.deleteOne({"content" : "我想变美"},function(err,result){
  	if(!err){
  		console.log(result.result)
  	}else{
  		console.log('deleteOne error:::',err);
  	}
  	client.close();    	
  })

});
