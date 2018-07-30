const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
	//req 可读流
	//res 可写流
	// res.setHeader('content-Type','text/html;charset=UTF-8')
	// // res.write('<h1>hello,你好</h1>');
	// res.end('<h1>hello,你好</h1>');

	let PathName = req.url;
	// console.log(PathName);

	if(PathName === '/index.html'){
		//返回index.html页面
		fs.readFile('./index.html',(err,data)=>{
			if(!err){
				res.setHeader('content-Type','text/html;charset=UTF-8')
				// res.write('<h1>hello,你好</h1>');
				res.end(data);
			}else{
				res.setHeader('content-Type','text/html;charset=UTF-8')
				// res.write('<h1>hello,你好</h1>');
				res.statusCode = 404;
				res.end('<h1>很不巧，页面走丢了。。。</h1>');
			}
		});
	}else if(PathName === '/list.html'){
		//list.html页面
		fs.readFile('./list.html',(err,data)=>{
			if(!err){
				res.setHeader('content-Type','text/html;charset=UTF-8')
				// res.write('<h1>hello,你好</h1>');
				res.end(data);
			}else{
				res.setHeader('content-Type','text/html;charset=UTF-8')
				// res.write('<h1>hello,你好</h1>');
				res.statusCode = 404;
				res.end('<h1>很不巧，页面走丢了。。。</h1>');
			}
		});
	}else if(PathName === '/index.css'){
		//list.html页面
		fs.readFile('./index.css',(err,data)=>{
			if(!err){
				res.setHeader('content-Type','text/css;charset=UTF-8')
				// res.write('<h1>hello,你好</h1>');
				res.end(data);
			}else{
				res.setHeader('content-Type','text/html;charset=UTF-8')
				// res.write('<h1>hello,你好</h1>');
				res.statusCode = 404;
				res.end('<h1>很不巧，页面走丢了。。。</h1>');
			}
		});
	}else if(PathName === '/index.js'){
		//list.html页面
		fs.readFile('./index.js',(err,data)=>{
			if(!err){
				res.setHeader('content-Type','application/x-javascript;charset=UTF-8')
				// res.write('<h1>hello,你好</h1>');
				res.end(data);
			}else{
				res.setHeader('content-Type','text/html;charset=UTF-8')
				// res.write('<h1>hello,你好</h1>');
				res.statusCode = 404;
				res.end('<h1>很不巧，页面走丢了。。。</h1>');
			}
		});
	}else if(PathName === '/jdB2.jpg'){
		//list.html页面
		fs.readFile('./jdB2.jpg',(err,data)=>{
			if(!err){
				res.setHeader('content-Type','image/jpeg;charset=UTF-8')
				// res.write('<h1>hello,你好</h1>');
				res.end(data);
			}else{
				res.setHeader('content-Type','text/html;charset=UTF-8')
				// res.write('<h1>hello,你好</h1>');
				res.statusCode = 404;
				res.end('<h1>很不巧，页面走丢了。。。</h1>');
			}
		});
	}else{
		//页面不存在
		res.setHeader('content-Type','text/html;charset=UTF-8')
		// res.write('<h1>hello,你好</h1>');
		res.statusCode = 404;
		res.end('<h1>很不巧，页面走丢了。。。</h1>');
	};
	
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1');
});