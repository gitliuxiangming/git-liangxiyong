const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'blog';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client){
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  const collection = db.collection('documents');

  /*
  //插入文档
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
  	if(!err){
  		console.log(result.result);
  	}else{
  		console.log(err);
  	}
  });
  */


  /*
  //查询文档
  // Find some documents
  collection.find({}).toArray(function(err, result) {
    if(!err){
  		console.log(result.result);
  	}else{
  		console.log(err);
  	}
  });
	*/


	/*
	//更新文档
	collection.updateOne({ a : 2 }
	    , { $set: { b : 1 } }, function(err, result) {
	    	if(!err){
		  		console.log(result.result);
		  	}else{
		  		console.log(err);
		  	}
	  });

	  */

	  //删除文档
	  // Delete document where a is 3
	  collection.deleteOne({ a : 3 }, function(err, result) {
	    if(!err){
	  		console.log(result.result);
	  	}else{
	  		console.log(err);
	  	}
	  }); 


















  client.close();
});





  




