/*
* @Author: TomChen
* @Date:   2018-07-24 09:43:09
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-24 09:50:55
*/
const fs = require('fs');

//open file
fs.open('./001.txt','r',(err,fd)=>{
	if(!err){//open success
		let buf = Buffer.alloc(100);
		fs.read(fd,buf,0,100,0,(err)=>{
			if(!err){//read success
				fs.close(fd,(err)=>{
					if(!err){//close success
						console.log('close success....')
						console.log(buf);
					}else{//close fail
						console.log('close file error::',err);
					}
				})
			}else{//read fail
				console.log('read error::',err);
			}
		})
	}else{//open fail
		console.log('open error::',err);
	}
});