const EventEmitter = require('events');

class Likereadable extends EventEmitter{
	constructor(data,offsetLength){
		super();
		this.data = data;
		this.offsetLength = offsetLength;
		this.on('newListener',(eventname)=>{
			if(eventname == 'data'){

			}
		})
	}
	_dispatch(chuk,offsetLength){
		let startLength = this.data.length;
		let endLength = startLength;
		if(endLength > 0){
			let start = startLength - endLength;
			endLength -= startLength - offsetLength;
		}
	}
}


let data='aaaaabbbbbcccccddddd';

const reads = new Likereadable(data,10);

const reads = getReadableStreamSomehow();
reads.on('data', (chunk) => {
  console.log('data');
});
reads.on('end', () => {
  console.log('There will be no more data.');
});