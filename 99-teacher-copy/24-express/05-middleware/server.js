/*
* @Author: TomChen
* @Date:   2018-08-04 10:05:36
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-04 10:16:54
*/
const http = require('http');

function express(){
	//存放需要执行的中间件
	
	let fns = [];

	//每一请求都会执行该函数
	let app = function(req,res){
		let i = 0;
		function next(){
			let fn = fns[i++]
			if(!fn){
				return;
			}
			fn(req,res,next)
		}
		next();

	}
	app.use = function(fn){
		fns.push(fn);
	}
	return app;
}


//app 其实就是一个处理请求的函数
const app = express();

app.use((req,res,next)=>{
	console.log('before A::');
	next();
	console.log('after A::');
})
app.use((req,res,next)=>{
	console.log('before B::');
	next();
	console.log('after B::');
})
app.use((req,res,next)=>{
	console.log('before C::');
	next();
	console.log('after C::');
})
/*
const server = http.createServer((req,res)=>{

});
*/
const server = http.createServer(app);

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at 127.0.0.1:3000')
})