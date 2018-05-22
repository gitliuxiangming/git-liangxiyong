//刘向明
//调用定义的事件函数
gouwuche();	//购物车
navxialaliebiao();//导航栏onmouseenter下拉列表
sousuokuang()//搜索框
lunbotu()//轮播图
listli()//焦点图左边的list的事件
nowtime()//闪购倒计时
xuanxiangka1()//闪购右边部分
//xuanxiangka2()//页面其余部分
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
	var aA=document.querySelectorAll('.ggw .zuobian li a');
	var oCateContent=document.querySelector('.ggw .cate-content');
	var  oUl=oCateContent.getElementsByTagName('ul')[0];
	var time=null;
	for(var i=0;i<aA.length;i++){
		aA[i].index=i;
		aA[i].onmouseenter = function(){
			oUl.innerHTML='';
			clearTimeout(time);
			for(var j=0;j<aA.length;j++){
			aA[j].className='';			
			}				
			oCateContent.style.display = 'block';
			this.className='active';
			loading(this.index);			
		}		
	}	
	oZuobian.onmouseleave = function(){
		time= setTimeout(function(){
			oCateContent.style.display = 'none';
			for(var j=0;j<aA.length;j++){
			aA[j].className='';
			}
		},500)		
	}
	oCateContent.onmouseenter = function(){
		clearTimeout(time);
		oCateContent.style.display = 'block';
	}
	oCateContent.onmouseleave = function(){
		oCateContent.style.display = 'none';
		for(var j=0;j<aA.length;j++){
		aA[j].className='';
		}
	}
	function loading(index){
		var  aCates=CateItem[index];		
		if(!aCates){
			return;
		}
		oUl.innerHTML='';
		for(var i=0;i<aCates.length;i++){					
			var  oLi=document.createElement('li');
			oUl.appendChild(oLi);
			var  oImg=document.createElement('img');
			oLi.appendChild(oImg);
			oImg.src=aCates[i].img;
			var  oA=document.createElement('a');
			oLi.appendChild(oA);
			oA.innerHTML=aCates[i].name;
		}		
	}
}
function nowtime(){
	var nextData= new Date('2018/05/23 12:00:00');
	var aLi=document.querySelectorAll('.shangou .content .time ul li span');
	var timer=null;
	timer=setInterval(time,1000)
	function panding(a){
		if(a<10){
			return	a='0'+a;
		}else{
			return	a=''+a;
		}
	} 
	function time(){
		//获取当前时间
		var now = new Date();
		//剩下毫秒数
		var alltime=parseInt((nextData.getTime()-now.getTime())/1000);
		if(alltime<0){
			alltime=0;
			clearInterval(timer)
		}		
		var h = parseInt(alltime/3600);
		var m = parseInt((alltime%3600)/60);
		var s = parseInt(alltime%3600)%60;
		// if(alltime<=0){
		// 	h=0;
		// 	m=0;
		// 	s=0;
		// }	
		aLi[0].innerHTML=panding(h);
		aLi[2].innerHTML=panding(m);
		aLi[4].innerHTML=panding(s);
	}
	time();
}
function xuanxiangka1(){
	var aBtn=document.querySelectorAll('.shangou .caption .you span');
	var oSgContent=document.querySelector('.shangou .content .sg-content');
	var oBox=oSgContent.querySelector('.big-box');
	console.log(oBox)
	aBtn[0].onclick = function(){
		animation(oBox,{'left':0});
	};
	aBtn[1].onclick = function(){
		animation(oBox,{'left':-978});
	};
}
function xuanxiangka2(){

}