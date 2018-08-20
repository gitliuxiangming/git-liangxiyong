/*
* @Author: TomChen
* @Date:   2018-07-26 16:08:46
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-28 09:12:55
*/
const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('./mime.json');
const url = require('url');
const WishModel = require('./WishModel.js');
const querystring = require('querystring');
const swig = require('swig');

const server = http.createServer((req,res)=>{
	console.log("req.url:::",req.method,req.url);
	let reqUrl = url.parse(req.url,true);

	let pathname = reqUrl.pathname;

	let fileName = req.url;
	
	if(pathname === '/index.html' || pathname === '/'){//显示首页
		WishModel.get((err,data)=>{
			if(!err){
				/*
				let html = `<!DOCTYPE html>
							<html lang="en">
							<head>
								<meta charset="UTF-8">
								<title>许愿墙</title>
								<link rel="stylesheet" href="css/index.css">
							</head>
							<body>
								<div class="wall">`
					
					data.forEach((val)=>{
						html += `<div class="wish" style="background: ${val.color}">
										<a href="javascript:;" class="close" data-id='${val.id}'></a>
										${val.content}
								 </div>`
					});

					html +=	 `  </div>
					            <div class="form-box">
									<div>
										<textarea name="content" id="content" cols="30" rows="20"></textarea>
									</div>
									<div>
										<a href="javascript:;" class="sub-btn">许下心愿</a>
									</div>
								</div>	
							</body>
							<script src="js/jquery.min.js"></script>
							<script src="js/jquery.pep.js"></script>
							<script src="js/index.js"></script>
							</html>`;
					*/
				let template = swig.compileFile(__dirname+'/static/index.html');
				let html = template({
				   data:data
				});
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.end(html);	
			}else{
				console.log(err);
			}
		});	
	}else if(pathname === '/add' && req.method.toUpperCase() == 'POST'){//添加许愿
		//1.获取前端的参数
		let body = '';
		req.on('data',(chunk)=>{
			body += chunk;
		});
		req.on('end',()=>{
			let obj = querystring.parse(body);
			//2.存储到文件
			WishModel.add(obj,(err,data)=>{
				let result = {};
				if(!err){
					//3.返回结果到前端
					result = {
						status:0,//成功
						data:data
					}
				}else{
					result = {
						status:10,//成功
						message:'添加失败'
					}
					console.log(err);
				}
				let resultJson = JSON.stringify(result);
				res.end(resultJson);				
			});
		});
	}else if(pathname === '/del'){//删除
		// console.log(reqUrl);
		WishModel.remove(reqUrl.query.id,(err)=>{
			if(!err){
				let resultJson = JSON.stringify({
					status:0
				});
				res.end(resultJson);					
			}
		});
	}else{
		//静态资源处理
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
	}
	

});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running on 127.0.0.1:3000');
})