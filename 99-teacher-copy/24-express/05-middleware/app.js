/*
* @Author: TomChen
* @Date:   2018-08-03 15:20:15
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-04 10:02:56
*/
const express = require('express');

const app = express();

app.use((req,res,next)=>{
	console.log('before A::');
	// next();
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

app.get('/',(req,res)=>{
	res.send("<h1>hello 你好 跨猪</h1>");
})

app.listen(3000,()=>{
	console.log('server is running at 127.0.0.1:3000')
})