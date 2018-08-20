/*
* @Author: TomChen
* @Date:   2018-07-24 17:02:35
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-26 12:00:24
*/
const http = require('http');

const url = require('url');
const querystring = require('querystring')

const server = http.createServer((req,res)=>{
	
	console.log(req.url);//path
	console.log(req.method);
	
	if(req.method.toUpperCase() === 'POST'){
		let body = '';
		req.on('data',(chunk)=>{
			body += chunk;
		});

		req.on('end',()=>{
			// console.log(body);
			let obj = querystring.parse(body);
			console.log(obj);

			res.setHeader('Content-Type', 'text/html;charset=UTF-8');
			res.end('<h1>hello 你好</h1>');		
		})		
	}




});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server running at 127.0.0.1:3000');
});
