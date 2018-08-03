const espress = require('express');

console.log(express);
const app = espress();

app.get('/',(req,res)=>{
	res.send('<h1>我是一个粉刷匠</h1><br><h2>粉刷本领强</h2>');
})


app.listen(3000,()=>{
	console.log('server is running at localhost')
})
