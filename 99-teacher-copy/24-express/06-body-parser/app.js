/*
* @Author: TomChen
* @Date:   2018-08-04 11:40:20
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-04 11:55:06
*/
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/',(req,res)=>{
	// console.log('post data....')
	/*
	let body = '';

	req.on('data',(chunk)=>{
		body += chunk;
	})
	req.on('end',()=>{
		console.log(body);
	})
	*/
	console.log(req.body)
})

app.listen(3000,()=>{
	console.log('running')
})