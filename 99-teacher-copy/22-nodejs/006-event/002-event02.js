/*
* @Author: TomChen
* @Date:   2018-07-23 09:48:44
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-23 11:17:28
*/
const EventEmitter = require('events');

// console.log(EventEmitter);

class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter();

// console.log(myEmitter.on === myEmitter.addListener);

/*
myEmitter.on('test',()=>{
	console.log('test event 1');
});
myEmitter.addListener('test',()=>{
	console.log('test event 2');
});
*/
//one
/*
myEmitter.once('test',()=>{
	console.log('test once...');
})
*/
/*
myEmitter.on('test',(arg1,arg2)=>{
	console.log(this);
	console.log('test event 1',arg1,arg2);
});
*/
myEmitter.on('test',function(arg1,arg2){
	console.log(this);
	console.log('test event 1',arg1,arg2);
});
myEmitter.emit('test',...['aa','bb']);

