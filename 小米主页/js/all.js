//刘向明
//调用定义的事件函数
gouwuche();	//购物车
navxialaliebiao();//导航栏onmouseenter下拉列表
sousuokuang()//搜索框
lunbotu()//轮播图
listli()//焦点图左边的list的事件
//nowtime()//闪购倒计时
//定义事件函数
function gouwuche(){
	//获取元素
	var oCartBox=document.querySelector('.container .cart-box');
	var oCartContent=document.querySelector('.cart-box .cart-content');
	var oLoading=document.querySelector('.cart-content .loader');
	var oSpanMsg=document.querySelector('.cart-content .cart-empty');
	var oTop2=document.querySelector('.cart-box .top2');
	//监听鼠标移入事件
	oCartBox.onmouseenter=function(){
		//1.改变购物车的背景色和字体颜色
		oTop2.style.color='#ff6700';
		//2.显示loading图标
		oLoading.style.display='block';
		//3.购物车的内容显示出来
		animation(oCartContent,{height:100},false,function(){
			oLoading.style.display='none';
			oSpanMsg.style.display='block';
		})
	}
	oCartBox.onmouseleave=function(){
		//1.改变购物车的背景色和字体颜色
		oTop2.style.color='#b0b0b0';
		//2.显示loading图标
		//3.购物车的内容显示出来
		oSpanMsg.style.display='none';
		animation(oCartContent,{height:0})
	}
}
function navxialaliebiao(){
	var aLiA=document.querySelectorAll('.nav .nav2 a');
	var oBigBox=document.querySelector('.navxiala');
	var oUl=document.querySelector('.navxiala .xialaul');
	var oNavLoader=document.querySelector('.navxiala .container .loader');
	var time=null;
	for(var i=0;i<aLiA.length-2;i++){
		aLiA[i].index=i;		
		aLiA[i].onmouseenter = function(){
			oUl.innerHTML='';	
			clearTimeout(time);
			oBigBox.style.borderTop='1px solid #ccc';
			animation(oBigBox,{height:210});
			oNavLoader.style.display='block';
			var index=this.index;
			setTimeout(function(){
				loaddata(index);
				oNavLoader.style.display='none';
			},500)
		}
		aLiA[i].onmouseleave = function(){
			time=setTimeout(function(){
				oBigBox.style.borderTop='';
				animation(oBigBox,{height:0});
			},500)			
		}
		oBigBox.onmouseenter = function(){
			clearTimeout(time);
			// oBigBox.style.borderTop='1px solid #ccc';
			// animation(oBigBox,{height:210});
		}
		oBigBox.onmouseleave = function(){
			time=setTimeout(function(){
				oBigBox.style.borderTop='';
				animation(oBigBox,{height:0});
			},500)
		}
	}
	function loaddata(index){
		var aDatas=DataItem[index];
		if(!aDatas){
			return;
		}	
		oUl.innerHTML='';	
		for(var i=0;i<aDatas.length;i++){
			var oLi=document.createElement('li');
			var oDiv=document.createElement('div');
			var oImg=document.createElement('img');
			var oP1=document.createElement('p');
			var oP2=document.createElement('p');
			oDiv.className='img-box';
			oLi.className='li1';
			oImg.src=aDatas[i].img;
			oP1.innerHTML=aDatas[i].name;
			oP2.innerHTML=aDatas[i].jiage;			
			oLi.appendChild(oDiv);
			oDiv.appendChild(oImg);
			oUl.appendChild(oLi);
			oLi.appendChild(oP1);
			oLi.appendChild(oP2);			
			if(aDatas[i].tag){
				var oSpan=document.createElement('span');
				oSpan.innerHTML=aDatas[i].tag;
				oLi.appendChild(oSpan);
			}
		}
	}
}
function sousuokuang(){
	var oInput=document.querySelector('.nav3 .nav3input');
	var aLi=document.querySelectorAll('.nav3 .nav3li');
	var oSpan1=document.querySelector('.nav3 .nav3li .span1');
	var oSpan2=document.querySelector('.nav3 .nav3li .span2');
	var oNav3list=document.querySelector('.nav .nav3-list')
	oInput.onfocus = function(){
		console.log(oNav3list);		
		for(var i=0;i<aLi.length;i++){
			aLi[i].style.borderColor='#ff6700';
		}
		oSpan1.style.display='none';
		oSpan2.style.display='none';
		oNav3list.style.display='block';
	}
	oInput.onblur = function(){
		console.log(oNav3list);		
		for(var i=0;i<aLi.length;i++){
			aLi[i].style.borderColor='#b0b0b0';
		}
		oSpan1.style.display='block';
		oSpan2.style.display='block';
		oNav3list.style.display='none';
	}
}
function lunbotu(){
	new Carousel({
		id:'lunbotu',
		aImg:[
			'image/黄金广告1.jpg',
			'image/黄金广告2.jpg',
			'image/黄金广告3.jpg'
		],
		width:1226,
		height:460,
		lunbotime:2000
	});
}
function listli(){
	var oZuobian=document.querySelector('.ggw .zuobian');
	var aA=document.querySelectorAll('.ggw .zuobian a');
}
function nowtime(){
	var nextData= new Data('2018/05/20 12:00:00');
	setInterval(function(){
		//获取当前时间
		var now = new Data();
		//剩下毫秒数
		var alltime=parseInt((nextData.getTime()-now.getTime())/1000);
		var h = parseInt(alltime/3600);
		var m = parseInt((alltime%3600)/60);
		var s = parseInt(alltime%3600)%60;
	},1000)
}