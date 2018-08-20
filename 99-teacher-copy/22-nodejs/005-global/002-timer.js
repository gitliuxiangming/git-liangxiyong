/*
* @Author: TomChen
* @Date:   2018-07-21 17:02:13
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-21 17:12:20
*/
/*
console.log(1);

let t = setTimeout(()=>{
	console.log(2)
},1000);

clearTimeout(t);

console.log(3);
*/

/*
console.log(1);

let t = setInterval(()=>{
	console.log(2)
},0);

clearInterval(t);

console.log(3);
*/
console.log(global);
console.log(1);

let t = setImmediate(()=>{
	console.log(2);
});

// clearImmediate(t);

console.log(3);


