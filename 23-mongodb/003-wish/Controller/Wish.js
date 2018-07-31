
const wish = require('../Model/Wish.js');
const swig = require('swig');
const querystring = require('querystring');

class Wish{

	index(req,res,...args){
		wish.get((err,data)=>{
	        if(!err){
	            const template = swig.compileFile(__dirname+'/../View/wish/index.html');
	            var output = template({
	                'data':data
	            });            
	            res.setHeader('Content-Type','text/html;charset=UTF-8');
	            res.end(output);  
	        }else{
	            console.log(err);
	        }
		});
	};

	add(req,res,...args){
		let body = '';
    	req.on('data',(chunk)=>{
    		body += chunk;
    	});
    	req.on('end',()=>{
            let objBody = querystring.parse(body);
    		wish.add(objBody,(err,data)=>{
                let result={};
                if(!err){
                    result={
                        'status' :0,
                        'data' : data
                    }
                }else{
                    result={
                        'status' :0,
                        'message' : '数据传输失败'
                    }
                }
                let resultJson = JSON.stringify(result);
                res.end(resultJson);
            })
    	});

	};

	del(req,res,...args){
		 wish.remove(args[0],(err)=>{
		 	let result={};
            // console.log(reqUrl.query.id);
            if(!err){
                result = {
                    'status':0
                }
              	let resultJson = JSON.stringify(result);
                res.end(resultJson);
            }
        })
	};
}


module.exports =  new Wish();





















