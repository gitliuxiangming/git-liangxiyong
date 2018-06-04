//LQuery的基本结构是一个闭包
(function(window,undefined){
	var 
		//lQuery的构造函数
		lQuery= function(){
			return new lQuery.fn.init(selector);
		}; 
	//lQuery的原型对象
	lQuery.fn = lQuery.prototype = {
		constructor:lQuery,
		init:function(selector){
				//布尔值是假的情况下返回空的jQuery对象
				if(!selector){
					return this;
				}
				//如果是函数的话返回有document的jQuery对象，当页面所有的DOM节点加载完毕后执行传入的函数
				else if(lQuery.isFunction(selector)){
					document.addEventListener('DOMcontentloader',function(){
						selector();
					});
					this[0]=document;
					this.length = 1;
					return this;
				}
				//处理字符串
				else if(lQuery.isString(selector)){
					//字符串是HTML代码的处理
					if(lQuery.isHTML(selector)){
						var tmpDom=document.createElement('div');
						tmpDom.innerHTML=selector;
						// for(var i = 0;i<tmpDom.children.length;i++){
						// 	this[i] =  tmpDom.children[i];
						// }
						// this.length = tmpDom.children.length;
						[].push.apply(this,tmpDom.children);
						return this;
					}
					//字符串是选择器的处理
					else{
						var doms = document.querySelectorAll(selector);
						// for(var i = 0;i<doms.length;i++){
						// 	this[i] = doms[i];
						// }
						// this.length = doms.length;
						[].push.apply(this,doms);
						return this;
					}					
				}
			}			
		},
	};
	//罗列静态方法
	lQuery.isFunction = function(str){
		return typeof str === 'function'
	}
	lQuery.isString = function(str){
		return typeof str === 'string'
	}
	lQuery.isHTML = function(str){
		return str.charAt(0) == '<' && str.charAt(str.length-1) == '>' && str.length >= 3;
	}
	kQuery.trim = function(str){
		if(kQuery.isString(str)){
			//用正则去掉字符串的前后空格
			return str.replace(/^\s+|\s+$/g,'');
		}else{
			return str;
		}	
	}
	//把lQuery上的init.prototype赋给lQuery.fn
	lQuery.fn.init.prototype = lQuery.fn;
	//暴露到window上
	window.lQuery = window.$ = lQuery; 
})(window);