/*
* @Author: TomChen
* @Date:   2018-07-24 17:02:35
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-26 10:14:55
*/
const http = require('http');
const fs = require('fs');

// console.log(http);

const server = http.createServer((req,res)=>{
	//req 可读流 
	//res 可写流

	console.log('url:::',req.url);
	let pathName = req.url;

	if(pathName === '/index.html'){
		//返回index.html页面
		fs.readFile('./index.html',(err,data)=>{
			if(!err){
				res.setHeader('Content-Type', 'text/html;charset=UTF-8');
				res.end(data);				
			}else{
				res.setHeader('Content-Type', 'text/html;charset=UTF-8');
				res.statusCode = 404;
				res.end("<h1>请求出错啦。。。。</h1>");					
			}
		});

	}else if(pathName === '/list.html'){
		//返回list.html页面
		fs.readFile('./list.html',(err,data)=>{
			if(!err){
				res.setHeader('Content-Type', 'text/html;charset=UTF-8');
				res.end(data);				
			}else{
				res.setHeader('Content-Type', 'text/html;charset=UTF-8');
				res.statusCode = 404;
				res.end("<h1>请求出错啦。。。。</h1>");					
			}
		});		
	}else if(pathName === '/index.css'){
		fs.readFile('./index.css',(err,data)=>{
			if(!err){
				res.setHeader('Content-Type', 'text/css;charset=UTF-8');
				res.end(data);				
			}else{
				res.setHeader('Content-Type', 'text/html;charset=UTF-8');
				res.statusCode = 404;
				res.end("<h1>请求出错啦。。。。</h1>");					
			}
		});			
	}else if(pathName === '/index.js'){
		fs.readFile('./index.js',(err,data)=>{
			if(!err){
				res.setHeader('Content-Type', 'application/x-javascript;charset=UTF-8');
				res.end(data);				
			}else{
				res.setHeader('Content-Type', 'text/html;charset=UTF-8');
				res.statusCode = 404;
				res.end("<h1>请求出错啦。。。。</h1>");					
			}
		});			
	}else if(pathName === '/girl.jpg'){
		fs.readFile('./girl.jpg',(err,data)=>{
			if(!err){
				res.setHeader('Content-Type', 'image/jpeg;charset=UTF-8');
				res.end(data);				
			}else{
				res.setHeader('Content-Type', 'text/html;charset=UTF-8');
				res.statusCode = 404;
				res.end("<h1>请求出错啦。。。。</h1>");					
			}
		});			
	}else if(pathName === '/s1.mp4'){
		fs.readFile('./s1.mp4',(err,data)=>{
			if(!err){
				res.setHeader('Content-Type', 'video/mpeg;charset=UTF-8');
				res.end(data);				
			}else{
				res.setHeader('Content-Type', 'text/html;charset=UTF-8');
				res.statusCode = 404;
				res.end("<h1>请求出错啦。。。。</h1>");					
			}
		});			
	}else{
		//不存在
		res.setHeader('Content-Type', 'text/html;charset=UTF-8');
		res.statusCode = 404;
		res.end("<h1>页面走丢了。。。。</h1>");				
	}
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server running at 127.0.0.1:3000');
});
