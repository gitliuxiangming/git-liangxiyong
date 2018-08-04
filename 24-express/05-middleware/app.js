const espress = require('express');

const app = espress();

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







app.get('/',(req,res)=>{
	res.send('<h1>我是一个粉刷匠</h1><br><h2>粉刷本领强</h2>');
})

app.listen(3000,()=>{
	console.log('server is running at localhost')
})
