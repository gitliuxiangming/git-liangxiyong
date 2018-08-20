/*
* @Author: TomChen
* @Date:   2018-08-03 15:20:15
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-04 09:20:16
*/
const express = require('express');
// const userRouter = require('./routes/user.js')


const app = express();
app.use(express.static('public'));
// app.use('/static',express.static('public'));

app.use('/user',require('./routes/user.js'));
app.use('/blog',require('./routes/blog.js'));

app.listen(3000,()=>{
	console.log('server is running at 127.0.0.1:3000')
})