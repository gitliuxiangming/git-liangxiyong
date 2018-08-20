/*
* @Author: TomChen
* @Date:   2018-07-27 10:29:02
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-28 11:23:23
*/
const fs = require('fs');
const uuidv1 = require('uuid/v1');
const path = require('path');

const filePath = path.normalize(__dirname + '/../data/wish.json');

let getRandom = (min,max)=> {	
	return Math.round(min + (max-min)*Math.random());
}

const colorArr = ['#f10','#ff0','#ff5600','#0f1'];

let add = (options,callback)=>{
	fs.readFile(filePath,(err,data)=>{
		if(!err){
			let obj = JSON.parse(data);
			options.id = uuidv1();
			options.color = colorArr[getRandom(0,colorArr.length-1)];
			obj.push(options);
			let str = JSON.stringify(obj);

			fs.writeFile(filePath,str,(err)=>{
				if(!err){
					callback(null,options);
				}else{
					callback(err);
				}
			})

		}else{
			callback(err);
		}
	})
}

let get = (callback)=>{
	fs.readFile(filePath,(err,data)=>{
		if(!err){
			let obj = JSON.parse(data);
			callback(null,obj);
		}else{
			callback(err);
		}
	});
}

let remove = (id,callback)=>{
	fs.readFile(filePath,(err,data)=>{
		if(!err){
			let obj = JSON.parse(data);
			let newObj = obj.filter((val)=>{
				return val['id'] != id
			});
			let str = JSON.stringify(newObj);
			fs.writeFile(filePath,str,(err)=>{
				if(!err){
					callback(null);
				}else{
					callback(err);
				}
			})
		
		}else{
			callback(err);
		}
	});
}

module.exports = {
	get:get,
	add:add,
	remove:remove
}
