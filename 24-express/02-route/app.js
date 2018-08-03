const espress = require('express');

// console.log(express);

const app = espress();

app.use(espress.static('public'));

app.get('/',(req,res)=>{
	res.send('get data...');
});
app.post('/',(req,res)=>{
	res.send('post data...');
});
app.put('/',(req,res)=>{
	res.send('put data...');
});
app.delete('/',(req,res)=>{
	res.send('delete data...');
});




app.listen(3000,()=>{
	console.log('server is running at localhost')
})
