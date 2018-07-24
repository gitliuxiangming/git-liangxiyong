//1.引入模块
const fs = require('fs');
//2.打开文件
let fd = fs.openSync('./001.txt','w');
//3.写入内容
fs.writeSync(fd,'aaaa');
//4.关闭文件
fs.closeSync(fd);