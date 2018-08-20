/*
* @Author: TomChen
* @Date:   2018-07-24 17:02:35
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-26 15:43:53
*/
const http = require('http');

const url = require('url');
const querystring = require('querystring');
const formidable = require('formidable');
const util = require('util');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res)=>{
	
	console.log(req.url);//path
	
	if(req.method.toUpperCase() === 'POST'){
		let form = new formidable.IncomingForm();
		
		form.uploadDir = './upload';
		
		form.keepExtensions = true;

	    form.parse(req, function(err, fields, files) {
	      //改名
	      let oldPath = './'+files.img.path;
	      // console.log(oldPath);
	      let extname = path.extname(oldPath);	

	      let newPath = './upload/'+(new Date()).getTime()+Math.random()+extname;

	      // console.log(newPath);
	      fs.rename(oldPath,newPath,(err)=>{
	      	if(!err){
	      		res.writeHead(200, {'content-type': 'text/plain'});
	      		res.write('received upload:\n\n');
	      		res.end(util.inspect({fields: fields, files: files}));
	      	}
	      });

	    });		 
	}

});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server running at 127.0.0.1:3000');
});
