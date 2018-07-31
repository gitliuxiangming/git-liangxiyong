const {Writable} = require('stream');

class MyWritable extends Writable{
	constructor(){
		super();
	}
	_write(chunk, encoding, callback){
		console.log(chunk.toString());
		callback();
	}	
}
const toWrite = new MyWritable();//new一个实例对象
toWrite.write('a11',()=>{
	console.log('b11')//回调函数是一部执行的
})
toWrite.write('a22',()=>{
	console.log('b22')
})

console.log(stream);
console.log(Writable);
// 可读流
// process.stdin.pipe(toWrite);