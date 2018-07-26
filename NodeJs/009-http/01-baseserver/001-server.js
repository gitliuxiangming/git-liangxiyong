const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
	//req 可读流
	//res 可写流
	res.setHeader('content-Type','text/html;charset=UTF-8')
	// res.write('<h1>hello,你好</h1>');
	res.end('<h1>很不巧，页面走丢了。。。</h1>');
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1');
});