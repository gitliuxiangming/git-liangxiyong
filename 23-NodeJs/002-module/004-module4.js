const str1 = 'LBB';
let obj1 = {name:'DBT',age:18};
let show = ()=>{
	console.log('I am Show');
}
// module.exports.srt1 = str1;
// module.exports.obj1 = obj1;
// module.exports.show = show;
// exports.srt1 = str1;
// exports.obj1 = obj1;
// exports.show = show;


/*
//整个对象导出得用module.exports才行。如果用exports的话会早不到
module.exports = {
	str1:str1,
	obj1:obj1,
	show:show
}
*/
/*
exports = {
	str1:str1,
	obj1:obj1,
	show:show
}
*/