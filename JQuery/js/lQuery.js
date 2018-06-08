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
		toArray : function(){
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
	};

	//lQuery的entend方法，添加到他的静态方法和他的原型对象
	lQuery.extend = lQuery.fn.extend = function(obj){
		for(key in obj){
			this[key] = obj[key];
		}
	};

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
		toWords:function(str){
			return str.match(/\b\w+\b/g);
		},
		addEvent:function(dom,eventName,fn){
			if(dom.addEventListener){
				dom.addEventListener(eventName,fn)
			}else{
				dom.attachEvent('on' + eventName,fn)
			}
		},
	});

	//lQuerty的原型上的方法
	lQuery.fn.extend({
		html:function(content){
			if(content){
				this.each(function(){
					this.innerHTML = content;
				});
				return this;
			}else{
				return this[0].innerHTML;
			}
		},
		text:function(content){
			if(content){
				this.each(function(){
					this.innerText=content;
				})
				return this;
			}else{
				var str='';
				this.each(function(){
					str += this.innerText;
				});
				return str;	
			}
		},
		attr:function(arg1,arg2){
			if(lQuery.isObject(arg1)){//是对象的情况
				//设置所有的DOM属性值为对象中的所有值
				this.each(function(){
					var dom=this;
					lQuery.each(arg1,function(attr,value){
						dom.setAttribute(attr,value);	
					})
				})				
			}else{
				if(arguments == 1){//传递一个参数的情况
					//获取第一个DOM节点的属性值
					this[0].getAttribute(arg1);
				}else if(arguments.length == 2){//传递两个参数的情况
					//设置所有DOM的属性值
					this.each(function(){
						this.setAttribute(arg1,arg2)
					})
				}
			}
			return this;
		},
		removeAttr:function(attr){
			if(attr){
				this.each(function(){
					this.removeAttribute();
				})				
			};
			return this;
		},
		val:function(value){
			if(value){
				this.each(function(){
					this.value = value;
				})
				return this;
			}else{
				return this[0].value;
			}
		},
		css:function(arg1,arg2){
			if(lQuery.isString(arg1)){//是字符串的情况
				if(arguments.length == 1){
					//获取第一个元素对应的样式值
					// return this[0].style[arg1];
					
					if(this[0].currentStyle){//兼容低级浏览器
						return this[0].currentStyle[arg1];
					}else{
						return getComputedStyle(this[0],false)[arg1];
					}
					
				}else if(arguments.length == 2){
					this.each(function(){
						this.style[arg1] = arg2;
					});
				}
			}else if(lQuery.isObject(arg1)){
				this.each(function(){
					for(key in arg1){
						this.style[key] = arg1[key];
					}
				});
			}
			return this;
		},
		hasClass:function(str){
			var res = false;
			if(str){
				//判断是否存在指定单词的正则,eval方法可以把字符串转换成为js代码
				var reg = eval('/\\b'+str+'\\b/');
				this.each(function(){
					//判断传入的参数是否存在在DOM节点的className上
					if(reg.test(this.className)){
						res = true;
						return false;
					}
				})
			}
			return res;
		},
		addClass:function(str){
			if(str){
				var names=lQuery.toWords(str);
				this.each(function(){
					//如果有参数对应的class不添加,如果没有就添加
					var $this = lQuery(this);//DOM节点转lquery对象
					//传入多个值时得用循环
					for(var i=0;i<names.length;i++){
						if(!$this.hasClass(names[i])){
							this.className =this.className + ' ' + names[i];
						}
					}				
				})
			}			
			return this;
		},
		removeClass:function(str){
			//如果有参数对应的class就删除,如果没有就不删除
			if(str){
				var names=lQuery.toWords(str);
				var $this = lQuery(this);//DOM节点转lquery对象
				var reg = eval('/\\b'+names[i]+'\\b/');
				this.each(function(){
					for(var i=0;i<names.length;i++){
						if($this.hasClass(names[i])){
							this.className =this.className.replace(reg,'');
						}
					}				
				})
			}
			else{
				this.each(function(){
					this.className = '';
				})				
			}
			return this;
		},
		toggleClass:function(str){
			if(str){
				var names=lQuery.toWords(str);
				this.each(function(){
					var $this=lQuery(this);
					for(var i=0;i<names.length;i++){
						if($this.hasClass(names[i])){
							//有的删除
							$this.removeClass(names[i]);
						}else{
							//没有的添加
							$this.addClass(names[i]);
						}
					}
				})
			}else{
				this.each(function(){
					this.className = '';
				})
			}
			return this;
		}
	});

	//lQuery对象上的DOM操作相关方法
	lQuery.fn.extend({
		empty:function(){
			this.each(function(){
				this.innerHTML = '';
			});
			return this;
		},
		remove:function(selector){
			if(selector){
				//获取选择器选中的所有DOM节点
				var doms=document.querySelectorAll(selector);
				this.each(function(){
					for(var i=0;i<doms.length;i++){
						if(this==doms.[i]){
							var parentNode = this.parentNode;
							parentNode.removeChild(this);
						};
					};
				});
			}else{
				this.each(function(){
					var parentNode = this.parentNode;
					parentNode.removeChild(this);
				});
			};
			return this;
		},
		append:function(arg){
			if(arg){
				//lQuery对象，DOM节点，HTML代码片段
				var $arg=lQuery(arg);
				this.each(function(index,value){
					var parentNode = this;
					if(index==0){
						$arg.each(function(){//第一个DOM元素直接插入
							parentNode.appendChild(this);
						})
					}else{
						$arg.each(function(){
							//复制一份
							var dom=this.cloneNode(true);
							parentNode.appendChild(dom);
						})
					}
					
				})
			}
			return this;
		},
		prepend:function(arg){
			if(arg){
				//lQuery对象，DOM节点，HTML代码片段
				var $arg=lQuery(arg);
				this.each(function(index,value){
					var parentNode = this;
					if(index==0){
						$arg.each(function(){//第一个DOM元素直接插入
							//firstElementChild不会选取到文本节点，只能选到元素节点
							parentNode.insertBefore(this,parentNode,firstChild);
						});
					}else{
						$arg.each(function(){
							//复制一份
							var dom=this.cloneNode(true);
							parentNode.insertBefore(dom,parentNode,firstChild);
						});
					};
					
				});
			};
			return this;
		},
		clone:function(bcopy){
			var res=[];
			this.each(function(){
				var dom=this.cloneNode(true);
				if (bcopy && this.buckeEvent){//复制事件
					lQuery.each(this.buckeEvent,function(eventName,fnArr){
						lQuery.each(fnArr,function(){
							lQuery(dom).on(eventName,this);
						})
					})
				}
				res.push(dom);
			});
			return lQuery(res);
		}
	});

	//lQuery对象上事件的相关方法
	lQuery.fn.extend({
		on:function(eventName,fn){
			this.each(function(){
				if(this.buckeEvent){
					this.buckeEvent = {};
				}
				if(this.buckeEvent[eventName]){
					this.buckeEvent[eventName] = [];
					this.buckeEvent[eventName].push(fn);
					lQuery.addEvent(this,eventName,function(){
						lQuery.each(this.buckeEvent[eventName],function(){
							this();
						})
					});
				}else{
					this.buckeEvent[eventName].push(fn)
				}
				
			})
		},
		off:function(eventName,fnName){
			if (arguments.length == 0){
				this.each(function(){
					this.buckeEvent = {};
				})
			}else if(arguments.length == 1){
				this.each(function(){
					if(this.buckeEvent){
						this.buckeEvent[eventName] = [];
					}
				})
			}else if(arguments.length == 2){
				this.each(function(){
					var dom=this;
					if(this.buckeEvent && this.buckeEvent[eventName]){
						lQuery.each(this.buckeEvent[eventName]),function(index,value){
							if(this == fnName){
								dom.buckeEvent[eventName].splice(index,1);
							}
						}
					}
				})
			}
		},                                                                     
	});

	//把lQuery上的init.prototype赋给lQuery.fn
	lQuery.fn.init.prototype = lQuery.fn;

	//暴露到window上
	window.lQuery = window.$ = lQuery; 	
})(window); 