const EventEmitter = require('events');

class Likereadable extends EventEmitter{
	constructor(data,offsetLength){
		super();
		this.data = data;
		this.offsetLength = offsetLength;
		this.on('newListener',(eventname)=>{
			if(eventname == 'data'){
				setImmediate(()=>{
					this._dispath();
				})
			}
		})
	}
	_dispath(){
		let startLength = this.data.length;
		let endLength = startLength;
		while(endLength > 0){
			/*let start = startLength - endLength;
			endLength -= startLength - offsetLength;*/
			let start = startLength - endLength;
			let end = start + this.offsetLength;
			let tmp = this.data.slice(start,end);
			let buf = Buffer.from(tmp);
			this.emit('data',buf);
			endLength -= this.offsetLength;
		}
	}
}


let data='aaaaabbbbbcccccddddd';

const reads = new Likereadable(data,5);

// const reads = getReadableStreamSomehow();
reads.on('data', (chunk) => {
  console.log(chunk.toString());
});
reads.on('end', () => {
  console.log('There will be no more data.');
});