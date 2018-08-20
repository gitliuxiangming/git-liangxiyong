/*
* @Author: TomChen
* @Date:   2018-07-23 14:35:57
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-23 15:33:07
*/
//实现一个自己的可写流

const {Writable} = require('stream');


// console.log(stream);
// console.log(Writable)

//const writer = new Writable();
//writer.write('aa');

class MyWriter extends Writable{
	
	constructor(){
		super();
	}

	_write(chunk,encoding,callback){
		console.log(chunk.toString());
		callback();
	}
}

const writer = new MyWriter();

/*
writer.on('finish',()=>{
	console.log('finish...');
})

writer.write('aa','utf8',()=>{
	console.log('aa11');
});
writer.write('bb','utf8',()=>{
	console.log('bb11');
});

writer.end();
*/
//可读流
process.stdin.pipe(writer);

