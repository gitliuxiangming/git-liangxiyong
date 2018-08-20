/*
* @Author: TomChen
* @Date:   2018-07-26 16:08:46
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-26 16:41:04
*/
const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('./mime.json');

const server = http.createServer((req,res)=>{
	// /
	console.log(req.url);
	let fileName = req.url;

	//如果用户的请求是文件夹的话,就返回文件夹下面的index.html
	if(fileName.lastIndexOf('.') == -1){//文件夹
		fileName = fileName + '/index.html';
	}

	let filePath = path.normalize(__dirname + '/static/'+fileName);
	let fileExtName = path.extname(filePath);

	fs.readFile(filePath,(err,data)=>{
		if(!err){
			let mimeType = mime[fileExtName] || 'text/plain';
			res.setHeader('Content-Type', mimeType+';charset=UTF-8');
			res.end(data);
		}else{
			res.setHeader('Content-Type', 'text/html;charset=UTF-8');
			res.statusCode = 404;
			res.end('<h1>页面走丢了。。。。</h1>')
		}
	});
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running on 127.0.0.1:80');
})