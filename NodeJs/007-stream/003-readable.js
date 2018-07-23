const {Readable} = require('stream');
class MyReadable extends Readable{
	constructor(){
		super();
	}

	_read(size){
		this.index++;
		if(this.index<=5){
			console.log(this.index);
		}else{
			console.log('end...')
		}
	}
}

let rd = new MyReadable();
rd.on('read',(chunk)=>{
	console.log('data...',chunk)
})
rd.on('end',()=>{
	console.log('end...')
})