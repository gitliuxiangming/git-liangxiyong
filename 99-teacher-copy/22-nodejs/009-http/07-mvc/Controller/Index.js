/*
* @Author: TomChen
* @Date:   2018-07-28 10:38:06
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-28 15:17:40
*/
const swig = require('swig');
class Index{
	index(req,res,...args){
		let template = swig.compileFile(__dirname+'/../View/Index/index.html');
		let html = template({});
		res.setHeader('Content-Type','text/html;charset=UTF-8');
		res.end(html);			
	}
}

module.exports = new Index();