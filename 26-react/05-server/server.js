const http = require('http');
const server = http.createServer((req,res)=>{
	let data=["aaa","bbb"];
	res.end(JSON.stringify(data));
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('ojbk')
})