//err参数引入版

//1.引入模块
const fs = require('fs');
//2.打开文件
fs.open('./001.txt','a',(err,fd)=>{//3.分情况，看看是否成功打开
	if(!err){//成功打开文件
		fs.write(fd,'bbbbbb',(err)=>{//4.写入内容，再分情况
			if(!err){//成功写入
				console.log('write success...');
				fs.close(fd,(err)=>{//5.关闭文件，分情况
					if(!err){//成功关闭文件
						console.log('close file success...');
					}else{//关闭文件失败
						console.log('close file error...');
					};
				});
			}else{//写入失败
				console.log('write error...');
			}
		});
	}else{//打开文件失败
		console.log('open file error::',err);
	};
});



/*

//没有err参数版

const fs = require('fs');
fs.open('./001.txt','a',(err,fd)=>{
	fs.write(fd,'bbbbbb',()=>{
		fs.close(fd,()=>{
			console.log('完成')
		})
	})
})


*/