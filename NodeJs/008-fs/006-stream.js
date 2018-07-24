const fs = require('fs');

const ws = fs.createWriteStream('./ws.txt');
const rs = fs.createReadStream('./rs.txt');

/*
//写文件
ws.on('finish',()=>{
	console.log('write file finish...');
})
ws.on('open',()=>{
	console.log('open the file...')
})
ws.on('close',()=>{
	console.log('close the file...')
})
ws.write('abcdefg');
ws.write('\nhijklmn');
ws.write('\nopq rst');
ws.write('\nuvw xyx');
ws.end();
*/

/*
//读文件
// console.log(rs);
let body = '';
rs.on('data',(chunk)=>{
	body += chunk;
	console.log(body.toString());
});
rs.on('end',()=>{
	console.log('read file end...')
})
*/

//把读取的文件写入到指定文件中
rs.pipe(ws);