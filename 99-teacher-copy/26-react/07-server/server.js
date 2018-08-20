/*
* @Author: TomChen
* @Date:   2018-08-18 16:00:18
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-18 16:03:18
*/
const http = require('http');


const server = http.createServer((req,res)=>{
	res.setHeader("Access-Control-Allow-Origin","*");
	let data = ['learn react','learn nodejs']
	res.end(JSON.stringify(data))
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is runing at 127.0.0.1:3000')
})