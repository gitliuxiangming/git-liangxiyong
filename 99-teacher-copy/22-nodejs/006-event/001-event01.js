/*
* @Author: TomChen
* @Date:   2018-07-23 09:48:44
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-23 10:10:39
*/
const EventEmitter = require('events');

// console.log(EventEmitter);

class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter();

myEmitter.setMaxListeners(12);

myEmitter.on('test',()=>{
	console.log('test event 1');
});

myEmitter.on('test',()=>{
	console.log('test event 2');
});
myEmitter.on('test',()=>{
	console.log('test event 3');
});

myEmitter.on('test',()=>{
	console.log('test event 4');
});
myEmitter.on('test',()=>{
	console.log('test event 5');
});

myEmitter.on('test',()=>{
	console.log('test event 6');
});
myEmitter.on('test',()=>{
	console.log('test event 7');
});

myEmitter.on('test',()=>{
	console.log('test event 8');
});
myEmitter.on('test',()=>{
	console.log('test event 9');
});

myEmitter.on('test',()=>{
	console.log('test event 10');
});
myEmitter.on('test',()=>{
	console.log('test event 11');
});

myEmitter.on('test',()=>{
	console.log('test event 12');
});

myEmitter.emit('test');

