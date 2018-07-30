const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();
let fn1 = (ev,a,b) => {
  console.log('触发了一个事件！1111');
}
let fn2 = () => {
  console.log('触发了一个事件！2222');
}
myEmitter.on('event', fn1);
myEmitter.on('event', fn2);
myEmitter.removeListener('event',fn1);
myEmitter.emit('event');













