/*
* @Author: TomChen
* @Date:   2018-07-24 09:16:55
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-24 09:25:48
*/
const fs = require('fs');


fs.open('./001.txt','w',(err,fd)=>{
	if(!err){// open success
		fs.write(fd,'bbbb',(err)=>{
			if(!err){//success
				console.log('write success...');
				//close file
				fs.close(fd,(err)=>{
					if(!err){
						console.log('close file success...')
					}else{
						console.log('colse file error:::',err);
					}
				})
			}else{//
				console.log('write file error:::',err);
			}
		});
	}else{
		console.log('open file error::',err);
	}
});

console.log('do something....');