const fs = require('fs');

const fileAdress = './007-1-data.json';
const uuidv1 = require('uuid/v1');

let add = (name,callback)=>{
	fs.readFile(fileAdress,(err,data)=>{
		if(!err){
			let obj = JSON.parse(data);
				obj.push({
					'id' :uuidv1(),
					'name' : name
				})
				let str = JSON.stringify(obj);
			fs.writeFile(fileAdress,str,(err)=>{
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
	fs.readFile(fileAdress,(err,data)=>{
		if(!err){
			let obj = JSON.parse(data);
			let result = null;
			// for(key in obj){
			// 	if(obj[key]['id'] == id){
			// 		result = obj[key];
			// 		break;
			// 	}
			// 	console.log('in:::',obj[key])
			// }
			for (var i = 0; i < obj.length; i++) {
				if (obj[i]['id'] == id){
					result = obj[i];
					break;
				}
			}
			callback(null,result);
		}else{
			callback(err);
		}
	})
}


let update = (id,name,callback)=>{
	fs.readFile(fileAdress,(err,data)=>{
		if(!err){
			let obj = JSON.parse(data);
			obj.some((val)=>{
				if(val['id'] == id){
					val['name'] = name;
					console.log(val);
					return true;
				}
				console.log(val);
			})
			let str = JSON.stringify(obj);
			fs.writeFile(fileAdress,str,(err)=>{
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

let remove = (id,callback)=>{
	fs.readFile(fileAdress,(err,data)=>{
		if(!err){
			let obj = JSON.parse(data);
			let newObj = obj.filter((val)=>{
				if(val['id'] != id){
					return val;
				}
			})
			let str = JSON.stringify(newObj);
			fs.writeFile(fileAdress,str,(err)=>{
				if(!err){
					callback(null,newObj);
				}else{
					callback(err);
				}
			})
		}else{
			callback(err);
		}
	})
}

/*
add('你二大爷',(err,data)=>{
	if(!err){
		console.log(data);
	}else{
		console.log('error...',err);
	}
});
*/

/*
get('caeb9ac0-8f1a-11e8-954c-e57c686e2b3f',(err,data)=>{
	if(!err){
		console.log(data);
	}else{
		console.log('error:::',err)
	}
})
*/



update('cf2af220-8f1a-11e8-ab80-0745363f335d','二哥哥',(err,data)=>{
	if(!err){
		console.log(data);
	}else{
		console.log('update file  error::',err);
	}
})


/*
remove('a6972330-8f18-11e8-9fd4-2b5cb459bcfa',(err,data)=>{
	if(!err){
		console.log(data);
	}else{
		console.log('remove file  error::',err);
	}
})
*/

