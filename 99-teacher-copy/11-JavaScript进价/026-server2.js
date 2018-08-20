/*
* @Author: TomChen
* @Date:   2018-05-24 18:08:59
* @Last Modified by:   TomChen
* @Last Modified time: 2018-05-25 18:08:57
*/
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	res.setHeader("Content-Type","text/html;charset=UTF-8");
	// res.setHeader("Content-Type","text/plain");
	// res.statusCode = 404;
	console.log(req.url);
	if(req.url == '/favicon.ico'){
		res.statusCode = 404;
		res.end();
	}
	var filePath = "./"+req.url;
	fs.readFile(filePath,function(err,data){
		if(err){
			console.log('read file error:::',err);
			res.statusCode = 404;
			res.end('file not found');
		}else{
			res.statusCode = 200;
			res.end(data);
		}
	})

	// res.end('<h1>hello nodejs,你好</h1>');
});

server.listen(3000,'127.0.0.1',function(){
	console.log("server is running at http://127.0.0.1:3000");
})