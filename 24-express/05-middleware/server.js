const http = require('http');

function express(){
	fns = [];
	function app(req,res){
		let i=0;
		function next(){
			fn=fns[i++];
			if(!fn){
				return;
			}
			fn(req,res,next);
		}
		next();
	}
	function use(fn){
		fns.push(fn);
	}
	return app;
}

const app=express();

app.use((req,res,next)=>{
	console.log('一一一');
	next();
	console.log('111111');
});
app.use((req,res,next)=>{
	console.log('二二二');
	next();
	console.log('222222');
});
app.use((req,res,next)=>{
	console.log('三三三');
	next();
	console.log('333333');
});
const server = http.createServer(app)

server.listen(3000,()=>{
	console.log('server is running at localhost')
})