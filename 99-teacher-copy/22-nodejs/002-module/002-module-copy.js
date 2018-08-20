function (exports, require, module, __filename, __dirname) { /*
* @Author: TomChen
* @Date:   2018-07-21 09:42:41
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-21 14:40:14
*/
// console.log(arguments);
/*
function show() {
	console.log(arguments);
}
show();
*/

console.log(arguments.callee + '');
}
