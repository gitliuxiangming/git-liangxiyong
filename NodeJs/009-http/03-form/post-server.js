const http=require('http');
const fs=require('fs');
const querystring=require('querystring');
const url=require('url');
const server=http.createServer((req,res)=>{
	if(req.method.toUpperCase() == 'POST'){
		let body='';
		req.on('data',(chunk)=>{
			body = body+chunk;
		});
		req.on('end',()=>{
			console.log(body);
			console.log(querystring.parse(body));
			// console.log(JSON.parse(body));
		});
	}else{
		let path=req.url;
		// console.log(path);
		// const Url=url.parse(path);
		// console.log(Url);
		// console.log(querystring.parse(Url.query));


		const Url=url.parse(path,true).query;
		console.log(Url.name);


		res.end('ok');	
	}

});
server.listen(3000,'127.0.0.1',()=>{
	console.log('....')
})
