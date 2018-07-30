const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('./mime.json');
const url = require('url');

const server = http.createServer((req,res)=>{
	
	console.log(req.url);
	let fileName = req.url;
	//如果用户的请求是文件夹的话，就返回文件夹下面的index.html
	if(fileName.lastIndexOf('.') == -1){
		fileName = fileName + '/index.html';
	}
	let filePath = path.normalize(__dirname + '/static' +fileName);
	let fileExName =  path.extname(filePath);

	fs.readFile(filePath,(err,data)=>{
		let mimeName = mime[fileExName] || 'text/html';
		if(!err){
			res.setHeader('content-type',mimeName+';charset=UTF-8');
			res.end(data);
		}else{
			res.setHeader('content-type','text/html;charset=UTF-8');
			console.log('err:::',err);
			res.end('<h1>很不巧，页面走丢了。。。</h1>');
		}
	})

});

server.listen(3000,'127.0.0.1',()=>{;
	console.log('server is running of blog')
})