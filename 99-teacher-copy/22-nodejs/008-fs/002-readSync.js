/*
* @Author: TomChen
* @Date:   2018-07-24 09:08:01
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-24 10:11:40
*/
const fs = require('fs');

//open file
let fd = fs.openSync('./001.txt','r');

let buf = Buffer.alloc(100);

console.log(buf);

fs.readSync(fd,buf,0,100,0);

fs.closeSync(fd);

console.log(buf);