const express = require('express');
// const userRouter = require('./routes/user.js')

const app = express();

// app.use(express.static('liu'));
app.use('static',express.static('liu'));

app.use('/user',require('./router/user.js'));
app.use('/blog',require('./router/blog.js'));

app.listen(3000,()=>{
	console.log('server is running at 127.0.0.1:3000');
})