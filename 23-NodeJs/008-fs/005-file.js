const fs = require('fs');


//同步的写法!!!

//写
// fs.writeFileSync('001.txt','我是你哥',{flag:'a'});
//读
/*
let data = fs.readFileSync('001.txt');
console.log(data.toString());
*/

//----------------------------------------------------------------------------------!!!
//异步的写法！！！

//写
/*
fs.writeFile('001.txt','他生气的大爷\n',{flag:'a'},(err)=>{
	if(!err){
		console.log('write success...');
	}else{
		console.log('write fail...');
	}
});
*/
//读
fs.readFile('./001.txt',(err,data)=>{
	if(!err){
		console.log('read file success...');
		console.log(data.toString());
	}else{
		console.log('read file fail...');
	}
});
