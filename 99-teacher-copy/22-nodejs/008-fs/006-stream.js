/*
* @Author: TomChen
* @Date:   2018-07-24 10:45:22
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-24 11:23:10
*/
const fs = require('fs');

const ws = fs.createWriteStream('./ws.txt');
const rs = fs.createReadStream('./rs.txt');

//console.log(rs);
/*
ws.on('open',()=>{
	console.log('open...');
});
ws.on('close',()=>{
	console.log('close...');
});
ws.on('finish',()=>{
	console.log('finish...');
});

// console.log(ws);
ws.write('aaa');
ws.write('bbb');
ws.end();
*/

/*
let body = '';

rs.on('data',(chunk)=>{
	body += chunk;
	console.log(chunk);
});

rs.on('end',()=>{
	console.log(body);
	console.log('read file end');
})
*/
/*
rs.on('data',(chunk)=>{
	console.log(chunk);
})
*/
/*
rs.pipe(ws);
*/
rs.pipe(ws);




