//1.引入模块
const fs = require('fs');
//2.打开文件
fd = fs.openSync('./001.txt','r');
//3.设置参数
let buf = Buffer.alloc(100);

console.log(buf);
//4.读取文件
fs.readSync(fd,buf,0,100,0);
//5.关闭文件
fs.closeSync(fd);
console.log(buf);