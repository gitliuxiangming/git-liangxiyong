//LQuery的基本结构是一个闭包
(function(window,undefined){
	var 
		//lQuery的构造函数
		lQuery= function(selector){
			return new lQuery.fn.init(selector);
		}; 
	//lQuery的原型对象!!!!!
	lQuery.fn = lQuery.prototype = {
		constructor:lQuery,
		init:function(selector){
			//进来先把传入参数的开头和末尾的空格去掉
			selector = lQuery.trim(selector);
			//布尔值是假的情况下返回空的jQuery对象
			if(!selector){
				return this;
			}
			//如果是函数的话返回有document的jQuery对象，当页面所有的DOM节点加载完毕后执行传入的函数
			else if(lQuery.isFunction(selector)){
				document.addEventListener('DOMcontentloaded',function(){
					selector();
				});
				this[0]=document;
				this.length = 1;
			r;
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
				}
				//字符串是选择器的处理
				else{
					var doms = document.querySelectorAll(selector);
					// for(var i = 0;i<doms.length;i++){
					// 	this[i] = doms[i];
					// }
					// this.length = doms.length;
					[].push.apply(this,doms);					
				}				
			}
			else if(lQuery.isArray(selector)){
				//由于apply转伪数组有兼容问题(IE8以下不兼容),所以把所有传入的数组转换成真数组
				var tmpArr = [].slice.call(selector);
				
				//把转换后的真数组转换成伪数组
				[].push.apply(this,tmpArr);				
			}else{
				this[0] = selector;
				this.length = 1;				
			};
			return this;		
		},
		selector: "",
		length: 0,
		jquery:'1.0.0',
		//以下方法在调用时是lquery对象调用,所以方法内部的this指向调用的lquery对象
		push: [].push,
		sort: [].sort,
		splice: [].splice,
		toArray : function(str){
			return [].slice.call( this );
		},
		get : function(num){
			if(arguments.length == 1){
				//正数
				if(num>=0){
					return this[num];
				}
				//负数
				else{
					return this[this.length + num];
				}
			}else{
				this.toArray();				
			}
		},
		eq:function(num){
			if(arguments.length == 1){
				return lQuery(this.get(num));
			}else{
				return new lQuery();
			}
		},
		first:function(){
			return this.eq(0);
		},
		last:function(){
			return this.eq(-1);
		},
		each:function(fn){
			return lQuery.each(this,fn);
		},
		map:function(fn){
			return lQuery(lQuery.map(this,fn));
		},
	}

	//lQuery的entend方法，添加到他的静态方法和他的原型对象
	lQuery.extend = lQuery.fn.extend = function(obj){
		for(key in obj){
			this[key] = obj[key];
		}
	}

	//lQuery的静态方法
	lQuery.extend({
		isFunction : function(str){
			return typeof str === 'function'
		},
		isString : function(str){
			return typeof str === 'string'
		},
		isHTML : function(str){
			return str.charAt(0) == '<' && str.charAt(str.length-1) == '>' && str.length >= 3;
		},
		isArray : function(str){
			return lQuery.isObject(str) && length in str 
		},
		isObject : function(str){
			return typeof str === 'object';
		},
		trim : function(str){
			if(lQuery.isString(str)){
				//用正则去掉字符串的前后空格
				return str.replace(/^\s+|\s+$/g,'');
			}else{
				return str;
			}
		},			
		each:function(arr,fn){
			if(lQuery.isArray(arr)){
				for(var i = 0;i<arr.length;i++){
					var res = fn.call(arr[i],i,arr[i]);
					if(res == false){
						break;
					}else if(res == true){
						continue;
					}
				}
			}else{
				for(key in arr){
					var res = fn.call(arr[key],key,arr[key]);
					if(res == false){
						break;
					}else if(res == true){
						continue;
					}				
				}
			}
			return arr;
		},
		map:function(arr,fn){
			var retArr = [];
			if(lQuery.isArray(arr)){
				for(var i = 0;i<arr.length;i++){
					var res = fn(arr[i],i);
					if(res){
						retArr.push(res);
					}
				}
			}else{
				for(key in arr){
					var res = fn(arr[key],key);
					if(res){
						retArr.push(res);
					}
				}
			}
			return retArr;
		},
	});
	//把lQuery上的init.prototype赋给lQuery.fn
	lQuery.fn.init.prototype = lQuery.fn;
	//暴露到window上
	window.lQuery = window.$ = lQuery; 	
})(window);