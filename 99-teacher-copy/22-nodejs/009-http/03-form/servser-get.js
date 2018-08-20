/*
* @Author: TomChen
* @Date:   2018-07-24 17:02:35
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-26 11:44:14
*/
const http = require('http');

const url = require('url');
const querystring = require('querystring')

const server = http.createServer((req,res)=>{
	console.log(req.url);
	// /?name=rr&age=12&sex=male&hobby=basketball&hobby=football
	
	/*
	const myURL =
  	new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash');

  	console.log(myURL.searchParams.get('query'));
	*/
	// const myURL = new URL(req.url);	
	const myURL = new url.parse(req.url,true);	
	console.log(myURL.query);
	// console.log(querystring.parse(myURL.query));

	res.setHeader('Content-Type', 'text/html;charset=UTF-8');
	res.end('<h1>hello 你好</h1>');

});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server running at 127.0.0.1:3000');
});
