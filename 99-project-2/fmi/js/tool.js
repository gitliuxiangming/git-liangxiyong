function animation(obj,opation,sudu,fn){
				clearInterval(obj.time);
				var speed=0;
				var stop=false;				
				obj.time = setInterval(function(){
					var stopall=true;
					for(attr in opation){
						var dqz=parseFloat(getComputedStyle(obj,true)[attr]);
						if(attr == 'opacity'){
							dqz=dqz*100;
						}
						if (sudu) {
							if(dqz<=opation[attr]){
								speed= 10;
							}else{
								speed= -10;
							}
							if (Math.abs(opation[attr]-dqz)<Math.abs(speed)) {
								stop=true;								
							}else{
								stopall=false;
							}
						}else{
							speed=(opation[attr]-dqz)/5;
							speed=speed>0 ? Math.ceil(speed) : Math.floor(speed);
							if (!speed) {
								stop=true;
							}else{
								stopall=false;
							}
						}					
						if(stop){							
							if(attr == 'opacity'){
								obj.style[attr]=opation[attr]/100;
							}else{
								obj.style[attr] = opation[attr]+'px';
							}
						}else{
							if(attr == 'opacity'){
								obj.style[attr]=(dqz+speed)/100;
							}else{
								obj.style[attr] = dqz+speed+'px';
							}
						}
					}
					if (stopall) {
						clearInterval(obj.time);
						if(fn){
							fn();
						}
					}
				},30)
			}
function Carousel(option){
		//罗列属性
		//获取容器
		this.oBox = document.getElementById(option.id);
		this.oImgUl = null;
		this.aImg = option.aImg;
		this.width = option.width;
		this.height = option.height;
		this.leftBtn = null;
		this.rightBtn = null;
		this.oBottomBtn = null;
		this.now = 0;
		this.lunbotime=option.lunbotime;
		//初始化
		this.init();
		//绑定事件
		this.bindEvent();
		if(this.lunbotime){
			this.lunbo();
		}
}
Carousel.prototype.init = function(){
	//创建放图片的ul容器
	this.oBox.style.width = this.width + 'px';
	this.oBox.style.height = this.height + 'px';
	this.oBox.style.position = 'relative';
	this.oImgUl = document.createElement('ul');
	for(var i = 0;i<this.aImg.length;i++){
		var oLi = document.createElement('li');
		var oImg = document.createElement('img');
		oLi.style.position = 'absolute';
		oLi.style.top = 0;
		oLi.style.left = 0;
		//默认显示第一张
		if(i==0){
			oLi.style.opacity = 1;
			oLi.style.zIndex = 50;
		}else{
			oLi.style.opacity = 0.5;
			oLi.style.zIndex = 0;
		}
		oImg.style.width = this.width + 'px';
		oImg.style.height = this.height + 'px';
		oImg.src = this.aImg[i];
		oLi.appendChild(oImg);
		this.oImgUl.appendChild(oLi);
	}
	//左右按钮
	this.leftBtn = document.createElement('span');
	this.rightBtn = document.createElement('span');
	this.leftBtn.className = 'leftBtn';
	this.rightBtn.className = 'rightBtn';
	this.leftBtn.style.zIndex = 999;
	this.rightBtn.style.zIndex = 999;
	this.leftBtn.innerHTML = "&lt;";
	this.rightBtn.innerHTML = "&gt;";
	
	//底部按钮
	this.oBottomBtn = document.createElement('ul');
	this.oBottomBtn.className = 'bottomBtn';
	this.oBottomBtn.style.zIndex = 999; 
	for(var i = 0;i<this.aImg.length;i++){
		var oLi = document.createElement('li');
		if(i == 0){
			oLi.className = 'active';
		}
		this.oBottomBtn.appendChild(oLi);
	}
	//把按钮添加到到顶层父容器中
	this.oBox.appendChild(this.leftBtn);
	this.oBox.appendChild(this.rightBtn);
	
	this.oBox.appendChild(this.oBottomBtn);
	//给底部按钮容器添加ml使其水平居中
	this.oBottomBtn.style.marginLeft = - this.oBottomBtn.offsetWidth * 0.5 + 'px';
	//把ul容器添加到顶层父容器中
	this.oBox.appendChild(this.oImgUl);
}
Carousel.prototype.bindEvent = function(){
	//显示下一张
	this.rightBtn.onclick = function(){
		this.now++;
		if(this.now >=  this.oImgUl.children.length){
			this.now = 0;
		}
		this.tab();
	}.bind(this);
	//显示上一张
	this.leftBtn.onclick = function(){
		this.now--;
		if(this.now < 0){
			this.now = this.oImgUl.children.length - 1;
		}
		this.tab();
	}.bind(this);
	var _left=this
	for(var i=0;i<this.oBottomBtn.children.length;i++){
		this.oBottomBtn.children[i].index=i; 
		// console.log(this.oImgUl.children[i]);
		this.oBottomBtn.children[i].onclick = function(){
			// console.log(this);
			_left.now=this.index;
			_left.tab();					
		}
	}		
}
Carousel.prototype.lunbo=function(){
	this.dingshiqi = setInterval(this.rightBtn.onclick,this.lunbotime);
	this.oBox.onmouseover = function(){
		clearInterval(this.dingshiqi);
	}.bind(this)
	this.oBox.onmouseout = function(){
		this.dingshiqi=setInterval(this.rightBtn.onclick,this.lunbotime);
	}.bind(this)
}
Carousel.prototype.tab = function(){
	//改变所有的li
	for(var i = 0;i<this.oImgUl.children.length;i++){
		this.oImgUl.children[i].style.zIndex = 0;
		this.oImgUl.children[i].style.opacity = 0.5;
		this.oBottomBtn.children[i].className = '';
	}
	//改变当前的li
	this.oImgUl.children[this.now].style.zIndex = 50;
	// this.oImgUl.children[this.now].style.opacity = 1;
	animation(this.oImgUl.children[this.now],{opacity:100},false);
	this.oBottomBtn.children[this.now].className = 'active';				
}