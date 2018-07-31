const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('./mime.json');
const url = require('url');
const querystring = require('querystring');
const WishModel = require('./WishModel.js');
const swig  = require('swig');
 
const server = http.createServer((req,res)=>{
    let reqUrl = url.parse(req.url,true);
    let pathname = reqUrl.pathname;
    // console.log(reqUrl);
    let fileName = req.url;
     
    if(pathname === '/index.html' || pathname === '/'){//显示首页
        WishModel.get((err,data)=>{
            if(!err){
                const template = swig.compileFile(__dirname+'/static/index.html');
                var output = template({
                    'data':data
                });            
                res.setHeader('Content-Type','text/html;charset=UTF-8');
                res.end(output);  
            }else{
                console.log(err);
            }
        });             
    }else if(pathname === '/add' && req.method.toUpperCase() === 'POST'){
    	let body = '';
    	req.on('data',(chunk)=>{
    		body += chunk;
    	});
    	req.on('end',()=>{
            let objBody = querystring.parse(body);
    		WishModel.add(objBody,(err,data)=>{
                let result = {};
                if(!err){
                    result = {
                        'status' :0,
                        'data' : data
                    }
                }else{
                    result = {
                        'status' :0,
                        'message' : '数据传输失败'
                    }
                }
                let resultJson = JSON.stringify(result);
                res.end(resultJson);
            })
    	});
    }else if(pathname === '/del'){
        WishModel.remove(reqUrl.query.id,(err)=>{
            // console.log(reqUrl.query.id);
            if(!err){
                result = {
                    'status':0
                }
                resultJson = JSON.stringify(result);
                res.end(resultJson);
            }
        })
    }
    else{
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