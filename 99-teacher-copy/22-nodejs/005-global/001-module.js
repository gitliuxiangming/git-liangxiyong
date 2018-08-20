/*
* @Author: TomChen
* @Date:   2018-07-21 16:29:30
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-21 16:49:08
*/

//module 当前的模块信息
//exports module.exports对象,用来导出模块
//require() 引入模块

// __dirname 当前模块的文件夹名次 
// console.log(__dirname);
// __filename 当前模块文件的绝对路径
// console.log(__filename);

// console.log(global);

/*
global.str = 1;
console.log(str);
*/

// console.log(process);
// console.log(process.argv);
/*
for(key in process.argv){
	console.log(process.argv[key])
}
*/

// console.log(process.argv[2]);
// console.log(process.env);
// console.log(process.pid);
// console.log(process.arch);
console.log(process.platform)



