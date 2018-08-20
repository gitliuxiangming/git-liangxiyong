/*
* @Author: TomChen
* @Date:   2018-07-23 09:48:44
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-23 11:15:29
*/
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter();

myEmitter.on('newListener',(eventName,callback)=>{
	console.log('newListener...',eventName,callback);
	callback();

});

let fn1 = ()=>{
	console.log('test1.....')
}
let fn2 = ()=>{
	console.log('test2.....')
}

myEmitter.on('test',fn1);
myEmitter.on('test',fn2);


// myEmitter.emit('test');


