
const wish = require('../Model/Wish.js');
const uuidv1 = require('uuid/v1');
const swig = require('swig');
const querystring = require('querystring');

function getRandom(min,max){
    return Math.round(min+(max-min)*Math.random());
}
function getcolor(){
    var str='01a2345789';
    var colorz='';
    while(colorz.length<2){
        colorz+=str[getRandom(0,9)];
    }
    colorz='f'+colorz;
    colorz='#'+colorz;
    return colorz;
}

class Wish{

	index(req,res,...args){
        /*
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
        */
        wish.find({},(err,docs)=>{
            if(!err){
                const template = swig.compileFile(__dirname+'/../View/wish/index.html');
                var output = template({
                    'data':docs
                });            
                res.setHeader('Content-Type','text/html;charset=UTF-8');
                res.end(output);  
            }else{
                console.log(err);
            }
        });
	};

	add(req,res,...args){
        /*
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
        */
        let body = '';
        req.on('data',(chunk)=>{
            body += chunk;
        });
        req.on('end',()=>{
            let objBody = querystring.parse(body);
            objBody.color=getcolor();
            objBody.id=uuidv1();
            wish.insertMany(objBody,(err,data)=>{
                let result = {};
               if(!err){
                    result={
                        'status' :0,
                        'data' : data[0]
                    }
                }else{
                    result={
                        'status' :10,
                        'message' : '数据传输失败'
                    }
                }
                let resultJson = JSON.stringify(result);
                res.end(resultJson);
            })
        });
	};

	del(req,res,...args){
        /*
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
        */
        wish.remove({_id:args[0]},(err,doc)=>{
            if(!err){
                let result={
                    status:0
                }
                let str=JSON.stringify(result);
                res.end(str);
            }else{
                console.log('err 什么鬼：：',err);
            }
        })
	};
}


module.exports =  new Wish();





















