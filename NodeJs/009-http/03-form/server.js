const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req,res)=>{
	// const myURL =url.parse(req.url,true);
	console.log(req.url);
	const myURL = new url.parse(req.url);
	// console.log(myURL.query);
	console.log(querystring.parse(myURL.query));


	res.end('ok');
});

server.listen(3000,'127.0.0.1',()=>{;
	console.log('server is running in the adress......')
})