/*
* @Author: TomChen
* @Date:   2018-07-23 09:05:51
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-23 09:43:55
*/
/*
	//2个16进制数 = 1B
	
	00 - ff //16进制数
	0 - 255 //10进制
	00000000 - 11111111 //二进制
	
	0 或者 1 代表了 1 bit(位)

	8bit = 1B(字节)

	1kb = 1024B
	1MB = 1024kb
	1GB = 1024MB
	1TB = 1024GB
*/

// const buf = new Buffer('hello');
//const buf = new Buffer(10);

// const buf = Buffer.from('hello');
// node 中 一个汉字 = 3B
const buf = Buffer.from('跨猪');
//console.log(buf.length)

// const buf = Buffer.alloc(10,'a');
// const buf = Buffer.alloc(10);
// buf[0] = 10;
// buf[1] = 0x10;
// buf[9] = 11;
// buf[10] = 11;
console.log(buf.toString());