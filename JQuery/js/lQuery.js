//LQuery是一个闭包
(function(window,undefined){
	var 
		//lQuery的构造函数
		lQuery= function(){
			return new lQuery.fn.init();
		}; 
	//lQuery的原型对象
	lQuery.fn = lQuery.prototype = {
		constructor:lQuery,
		init:function(){

		},
	};
	//把lQuery上的init.prototype赋给lQuery.fn
	lQuery.fn.init.prototype = lQuery.fn;
	//暴露到window上
	window.lQuery = window.$ = lQuery;
})(window);