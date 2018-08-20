/*
* @Author: TomChen
* @Date:   2018-07-24 11:25:42
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-24 16:06:14
*/
const fs = require('fs');
const uuidv1 = require('uuid/v1');

const filePath = './data.json';

let add = (name,callback)=>{
	fs.readFile(filePath,(err,data)=>{
		if(!err){
			// console.log(data)
			let obj = JSON.parse(data);
			// console.log(obj);
			obj.push({
				id:uuidv1(),
				name:name
			});
			// console.log(obj);
			let str = JSON.stringify(obj);

			fs.writeFile(filePath,str,(err)=>{
				if(!err){
					callback(null,obj);
				}else{
					callback(err);
				}
			})

		}else{
			callback(err);
		}
	})
}

let get = (id,callback)=>{
	fs.readFile(filePath,(err,data)=>{
		if(!err){
			// console.log(data);
			let obj = JSON.parse(data);
			// console.log(obj);
			let result = null;
			/*
			obj.forEach((val)=>{
				// console.log(val);
				if(val['id'] == id){
					result = val;
					return false;
				}
				console.log(val);
			});
			*/
			/*
			obj.every((val)=>{
				if(val['id'] == id){
					result = val;
					return false;
				}
				console.log(val);				
			})
			*/
			
			obj.some((val)=>{
				if(val['id'] == id){
					result = val;
					return true;
				}
				console.log('in::',val);				
			})
			
			/*
			for(key in obj){
				if(obj[key]['id'] == id){
					result = obj[key];
					break;
				}
			}
			*/
			callback(null,result);
		}else{
			callback(err);
		}
	});
}

let update = (id,name,callback)=>{
	fs.readFile(filePath,(err,data)=>{
		if(!err){
			let obj = JSON.parse(data);
			obj.some((val)=>{
				if(val['id'] == id){
					val['name'] = name;
					return true;
				}			
			})
			let str = JSON.stringify(obj);
			fs.writeFile(filePath,str,(err)=>{
				if(!err){
					callback(null,obj);
				}else{
					callback(err);
				}
			})

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
					callback(null,newObj);
				}else{
					callback(err);
				}
			})
		
		}else{
			callback(err);
		}
	});
}

/*
add('Leo',(err,data)=>{
	if(!err){
		console.log(data);
	}else{
		console.log('add data error:::',err);
	}
});
*/

/*
get('6ef6f580-8f0f-11e8-8857-1140aa849fx5',(err,data)=>{
	if(!err){
		// console.log(data);
		if(data){
			console.log(data)
		}else{
			console.log('not found');
		}
	}else{
		console.log('get data error:::',err);
	}	
})
*/
/*
update('69daaba0-8f0f-11e8-b8c5-7715c886791f','Amy',(err,data)=>{
	if(!err){
		console.log(data);
	}else{
		console.log('update error::',err);
	}
});
*/
remove('751434a0-8f0f-11e8-a199-4567c58dbb5b',(err,data)=>{
	if(!err){
		console.log(data);
	}else{
		console.log('remove error::',err);
	}
});
