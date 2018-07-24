const http = require('http');
const server = http.createServer((req,res)=>{
	res.setHeader('content-Type','text/html;charset=UTF-8')
	res.write('<h1>hello,大爷</h1>');
	res.end();
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1');
});