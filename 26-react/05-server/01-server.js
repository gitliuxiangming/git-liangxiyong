const http = require('http');
const server = http.createServer((req,res)=>{
	res.setHeader('Access-Control-Allow-Origin','*');
	let data = ['one','two'];
	res.end(JSON.stringify(data))
})
server.listen(8060,'127.0.0.1',()=>{
	console.log('server is running on 127.0.0.1:8060');
})