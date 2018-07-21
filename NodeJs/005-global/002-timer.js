console.log(1);



/*
let t = setTimeout(()=>{
	console.log(2);
},1000)
// clearTimeout(t);
*/

/*
let t = setInterval(()=>{
	console.log(2);
},500);

clearInterval(t);
*/

//立即定时器
let t = setImmediate(()=>{
	console.log(2);
})//立即定时器不接受时间参数，也可以被关掉

clearImmediate(t);


























console.log(3);