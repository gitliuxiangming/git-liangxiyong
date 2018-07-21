//每一个模块都有一个自己的module.exports 和 exports ！！！
//require引入的的另一个模块的module.exports!!!

let m4 = require('./004-module4.js');
console.log('m4:::',m4);
console.log(m4.obj1);
console.log(m4.show);