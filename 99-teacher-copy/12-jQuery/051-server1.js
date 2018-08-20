/*
* @Author: TomChen
* @Date:   2018-05-24 18:08:59
* @Last Modified by:   TomChen
* @Last Modified time: 2018-05-31 20:52:05
*/
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var server = http.createServer(function(req,res){
	res.setHeader("Content-Type","text/html;charset=UTF-8");
	var urlStr = req.url;
	console.log("req url:::",urlStr);
	//如果请求的是/favicon.ico直接返回
	if(urlStr == '/favicon.ico'){
		res.statusCode = 404;
		res.end();
	}
	console.log(req.method);
	var filePath = "./"+urlStr;
	if(urlStr.search(/\?/) != -1){
		filePath = "./"+urlStr.slice(0,urlStr.search(/\?/));
	}
	//如果没有参数,打开文件读取并且返回
	
	fs.readFile(filePath,function(err,data){
		if(err){
			console.log('read file error:::',err);
			res.statusCode = 404;
			res.end('file not found');
		}else{
			res.statusCode = 200;
			res.end(data);
			// setTimeout(function(){
			// 	res.end(data);
			// },2000)
		}
	})	
});

server.listen(3000,'127.0.0.1',function(){
	console.log("server is running at http://127.0.0.1:3000");
})