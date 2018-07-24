//1.引入模块
const fs = require('fs');
//2.打开文件
fs.open('./001.txt','r',(err,fd)=>{
	if(!err){//open file success
		//3.准备参数
		let buf = Buffer.alloc(100);
		//4.读取文件
		fs.read(fd,buf,0,100,0,(err,bytesRead,buffer)=>{
			if(!err){//read file success
				//5.关闭文件
				fs.close(fd,(err)=>{
					if(!err){//close file success
						console.log('close file success');
						console.log(buf.toString());
					}else{//close file fail
						console.log('close file error::',err);
					}
				})
			}else{//read file fail
				console.log('read file error::',err);
			}
		});
	}else{//open file fail
		console.log('open file error::',err);
	}
})