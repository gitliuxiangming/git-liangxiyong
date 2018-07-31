const fs = require('fs');
const uuidv1 = require('uuid/v1');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'blog';

let getDb = (callback)=>{
    MongoClient.connect(url, function(err, client){
      assert.equal(null, err);
      const db = client.db(dbName);
      callback(db,client);
    });
}
 
let getRandom=(max,min)=>{
    return Math.round(min+(max-min)*Math.random());
}
let add = (options,callback)=>{
    getDb(function(db,client){
        options._id = uuidv1();
        options.color = 'rgb('+getRandom(0,255)+','+getRandom(0,255)+','+getRandom(0,255)+')';
        const clo = db.collection('messages');
        clo.insertOne(options,function(err,result){
            if(!err){
                callback(null,options);
            }else{
                callback(err);
            }
        });

        client.close();
    });
}
 
let get = (callback)=>{
    getDb(function(db,client){
        const clo = db.collection('messages');
        clo.find({}).toArray(function(err,result){
            if(!err){
                callback(null,result);
            }else{
                callback(err);
            }
        });
        client.close();
    });       
}
let remove = (id,callback)=>{
     getDb(function(db,client){
        const clo = db.collection('messages');
        clo.deleteOne({_id:id},function(err){
            if(!err){
                callback(null);
            }else{
                callback(err);
            }
        });

        client.close();
    });
}   
 
module.exports = {
    get:get,
    add:add,
    remove:remove
}