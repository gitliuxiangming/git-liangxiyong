
const wish = require('../Model/Wish.js');
const swig = require('swig');

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
	}
}


module.exports =  new Wish();





















