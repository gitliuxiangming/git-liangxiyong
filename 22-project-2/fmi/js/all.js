//刘向明
//调用定义的事件函数
gouwuche();	//购物车
navxialaliebiao();//导航栏onmouseenter下拉列表
sousuokuang()//搜索框
lunbotu()//轮播图
listli()//焦点图左边的list的事件
nowtime()//闪购倒计时
xuanxiangka1()//闪购右边部分
xuanxiangka2()//页面家电部分
xuanxiangka3()//页面智能部分
xuanxiangka4()//页面搭配部分
xuanxiangka5()//页面配件部分
xuanxiangka6()//页面周边部分
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
	var nextData= new Date('2018/12/26 12:00:00');
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
	aBtn[0].onclick = function(){
		animation(oBox,{'left':0});
	};
	aBtn[1].onclick = function(){
		animation(oBox,{'left':-978});
	};
}
function xuanxiangka2(){
	var aLi=document.querySelectorAll('.jiadian .caption .you ul li');
	var oUl=document.querySelector('.jiadian .bt-you ul');	
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		init(0);
		aLi[0].className='active';
		aLi[i].onmouseenter = function(){
			init(this.index);
			for(var j=0;j<aLi.length;j++){
				aLi[j].className='';
			}
			this.className='active';
		}
	}
	function init(index){
		var aXuanXiangKas=xuanxiangkaItem[index]; 
		if(!aXuanXiangKas){
			return;
		}
		oUl.innerHTML='';
		for(var i=0;i<aXuanXiangKas.length;i++){
			if(i==7){
				var aLi7=document.createElement('li');
				aLi7.className='kuan1 huowu';
				oUl.appendChild(aLi7);
				var oDiv1=document.createElement('div');
				var oDiv2=document.createElement('div');
				oDiv1.className='ss';
				oDiv2.className='xx';
				aLi7.appendChild(oDiv1);
				aLi7.appendChild(oDiv2);
				var oDiv3=document.createElement('div');
				var oDiv4=document.createElement('div');
				var oDiv5=document.createElement('div');
				oDiv1.appendChild(oDiv3);
				oDiv2.appendChild(oDiv4);
				oDiv2.appendChild(oDiv5);
				var oPp1=document.createElement('p');
				var oPp2=document.createElement('p');
				var oPp3=document.createElement('p');
				var oPp4=document.createElement('p');
				oDiv3.appendChild(oPp1);
				oDiv3.appendChild(oPp2);
				oDiv4.appendChild(oPp3);
				oDiv4.appendChild(oPp4);
				var oA1=document.createElement('a');
				var oA2=document.createElement('a');
				var oA3=document.createElement('a');
				var oA4=document.createElement('a');
				oA1.href='javascript:';
				oA1.innerHTML=aXuanXiangKas[7].name;				
				oA2.href='javascript:';
				oA3.href='javascript:';
				oA4.href='javascript:';
				oPp1.appendChild(oA1);
				oDiv1.appendChild(oA2);
				oPp3.appendChild(oA3);
				oDiv5.appendChild(oA4);
				var oI=document.createElement('i');
				oI.className='iconfont';
				oA4.appendChild(oI);
				var oImg1=document.createElement('img');
				oA2.appendChild(oImg1);
				oPp2.innerHTML=aXuanXiangKas[7].jiage;
				oImg1.src=aXuanXiangKas[7].img;
				oA3.innerHTML=aXuanXiangKas[7].name1;
				oPp4.innerHTML=aXuanXiangKas[7].fenlei;
				oI.innerHTML=aXuanXiangKas[7].ibiao;
			}else{
				var aLis=document.createElement('li');
				aLis.className='kuan1 huowu biaoqian jjbiaoqian';
				oUl.appendChild(aLis);
				var oDiv=document.createElement('div');
				oDiv.className='pinlun';
				oDiv.style.zIndex='2';
				aLis.appendChild(oDiv);
				var oP1=document.createElement('p');
				var oP2=document.createElement('p');
				oP1.className='top1';
				oP2.className='bottom';
				oP1.innerHTML=aXuanXiangKas[i].p1;
				oP2.innerHTML=aXuanXiangKas[i].p2;
				oDiv.appendChild(oP1);
				oDiv.appendChild(oP2);
				var aUl=document.createElement('ul');
				aUl.className='tongyong';
				aLis.appendChild(aUl);
				var oLi1=document.createElement('li');
				aUl.appendChild(oLi1);
				var oImg=document.createElement('img');
				oImg.src=aXuanXiangKas[i].img;
				oLi1.appendChild(oImg);
				var oLi2=document.createElement('li');
				oLi2.innerHTML=aXuanXiangKas[i].name;
				aUl.appendChild(oLi2);
				var oLi3=document.createElement('li');
				oLi3.innerHTML=aXuanXiangKas[i].jieshao;
				aUl.appendChild(oLi3);
				var oLi4=document.createElement('li');
				var oSpan=document.createElement('span');
				var oDel=document.createElement('del');
				oSpan.innerHTML=aXuanXiangKas[i].jiage;
				oDel.innerHTML=aXuanXiangKas[i].del;
				oLi4.appendChild(oSpan);
				oLi4.appendChild(oDel);
				aUl.appendChild(oLi4);
			}
			
		}
	}
}
function xuanxiangka3(){
	var aLi=document.querySelectorAll('.zhineng .caption .you ul li');
	var oUl=document.querySelector('.zhineng .bt-you ul');	
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		init(0);
		aLi[0].className='active';
		aLi[i].onmouseenter = function(){
			init(this.index);
			for(var j=0;j<aLi.length;j++){
				aLi[j].className='';
			}
			this.className='active';
		}
	}
	function init(index){
		var aXuanXiangKas=xuanxiangkaItem3[index]; 
		if(!aXuanXiangKas){
			return;
		}
		oUl.innerHTML='';
		for(var i=0;i<aXuanXiangKas.length;i++){
			if(i==7){
				var aLi7=document.createElement('li');
				aLi7.className='kuan1 huowu';
				oUl.appendChild(aLi7);
				var oDiv1=document.createElement('div');
				var oDiv2=document.createElement('div');
				oDiv1.className='ss';
				oDiv2.className='xx';
				aLi7.appendChild(oDiv1);
				aLi7.appendChild(oDiv2);
				var oDiv3=document.createElement('div');
				var oDiv4=document.createElement('div');
				var oDiv5=document.createElement('div');
				oDiv1.appendChild(oDiv3);
				oDiv2.appendChild(oDiv4);
				oDiv2.appendChild(oDiv5);
				var oPp1=document.createElement('p');
				var oPp2=document.createElement('p');
				var oPp3=document.createElement('p');
				var oPp4=document.createElement('p');
				oDiv3.appendChild(oPp1);
				oDiv3.appendChild(oPp2);
				oDiv4.appendChild(oPp3);
				oDiv4.appendChild(oPp4);
				var oA1=document.createElement('a');
				var oA2=document.createElement('a');
				var oA3=document.createElement('a');
				var oA4=document.createElement('a');
				oA1.href='javascript:';
				oA1.innerHTML=aXuanXiangKas[7].name;				
				oA2.href='javascript:';
				oA3.href='javascript:';
				oA4.href='javascript:';
				oPp1.appendChild(oA1);
				oDiv1.appendChild(oA2);
				oPp3.appendChild(oA3);
				oDiv5.appendChild(oA4);
				var oI=document.createElement('i');
				oI.className='iconfont';
				oA4.appendChild(oI);
				var oImg1=document.createElement('img');
				oA2.appendChild(oImg1);
				oPp2.innerHTML=aXuanXiangKas[7].jiage;
				oImg1.src=aXuanXiangKas[7].img;
				oA3.innerHTML=aXuanXiangKas[7].name1;
				oPp4.innerHTML=aXuanXiangKas[7].fenlei;
				oI.innerHTML=aXuanXiangKas[7].ibiao;
			}else{
				var aLis=document.createElement('li');
				aLis.className='kuan1 huowu biaoqian jjbiaoqian';
				oUl.appendChild(aLis);
				var oDiv=document.createElement('div');
				oDiv.className='pinlun';
				oDiv.style.zIndex='2';
				aLis.appendChild(oDiv);
				var oP1=document.createElement('p');
				var oP2=document.createElement('p');
				oP1.className='top1';
				oP2.className='bottom';
				oP1.innerHTML=aXuanXiangKas[i].p1;
				oP2.innerHTML=aXuanXiangKas[i].p2;
				oDiv.appendChild(oP1);
				oDiv.appendChild(oP2);
				var aUl=document.createElement('ul');
				aUl.className='tongyong';
				aLis.appendChild(aUl);
				var oLi1=document.createElement('li');
				aUl.appendChild(oLi1);
				var oImg=document.createElement('img');
				oImg.src=aXuanXiangKas[i].img;
				oLi1.appendChild(oImg);
				var oLi2=document.createElement('li');
				oLi2.innerHTML=aXuanXiangKas[i].name;
				aUl.appendChild(oLi2);
				var oLi3=document.createElement('li');
				oLi3.innerHTML=aXuanXiangKas[i].jieshao;
				aUl.appendChild(oLi3);
				var oLi4=document.createElement('li');
				var oSpan=document.createElement('span');
				var oDel=document.createElement('del');
				oSpan.innerHTML=aXuanXiangKas[i].jiage;
				oDel.innerHTML=aXuanXiangKas[i].del;
				oLi4.appendChild(oSpan);
				oLi4.appendChild(oDel);
				aUl.appendChild(oLi4);
			}
			
		}
	}
}
function xuanxiangka4(){
	var aLi=document.querySelectorAll('.dapei .caption .you ul li');
	var oUl=document.querySelector('.dapei .bt-you ul');	
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		init(0);
		aLi[0].className='active';
		aLi[i].onmouseenter = function(){
			init(this.index);
			for(var j=0;j<aLi.length;j++){
				aLi[j].className='';
			}
			this.className='active';
		}
	}
	function init(index){
		var aXuanXiangKas=xuanxiangkaItem4[index]; 
		if(!aXuanXiangKas){
			return;
		}
		oUl.innerHTML='';
		for(var i=0;i<aXuanXiangKas.length;i++){
			if(i==7){
				var aLi7=document.createElement('li');
				aLi7.className='kuan1 huowu';
				oUl.appendChild(aLi7);
				var oDiv1=document.createElement('div');
				var oDiv2=document.createElement('div');
				oDiv1.className='ss';
				oDiv2.className='xx';
				aLi7.appendChild(oDiv1);
				aLi7.appendChild(oDiv2);
				var oDiv3=document.createElement('div');
				var oDiv4=document.createElement('div');
				var oDiv5=document.createElement('div');
				oDiv1.appendChild(oDiv3);
				oDiv2.appendChild(oDiv4);
				oDiv2.appendChild(oDiv5);
				var oPp1=document.createElement('p');
				var oPp2=document.createElement('p');
				var oPp3=document.createElement('p');
				var oPp4=document.createElement('p');
				oDiv3.appendChild(oPp1);
				oDiv3.appendChild(oPp2);
				oDiv4.appendChild(oPp3);
				oDiv4.appendChild(oPp4);
				var oA1=document.createElement('a');
				var oA2=document.createElement('a');
				var oA3=document.createElement('a');
				var oA4=document.createElement('a');
				oA1.href='javascript:';
				oA1.innerHTML=aXuanXiangKas[7].name;				
				oA2.href='javascript:';
				oA3.href='javascript:';
				oA4.href='javascript:';
				oPp1.appendChild(oA1);
				oDiv1.appendChild(oA2);
				oPp3.appendChild(oA3);
				oDiv5.appendChild(oA4);
				var oI=document.createElement('i');
				oI.className='iconfont';
				oA4.appendChild(oI);
				var oImg1=document.createElement('img');
				oA2.appendChild(oImg1);
				oPp2.innerHTML=aXuanXiangKas[7].jiage;
				oImg1.src=aXuanXiangKas[7].img;
				oA3.innerHTML=aXuanXiangKas[7].name1;
				oPp4.innerHTML=aXuanXiangKas[7].fenlei;
				oI.innerHTML=aXuanXiangKas[7].ibiao;
			}else{
				var aLis=document.createElement('li');
				aLis.className='kuan1 huowu biaoqian jjbiaoqian';
				oUl.appendChild(aLis);
				var oDiv=document.createElement('div');
				oDiv.className='pinlun';
				oDiv.style.zIndex='2';
				aLis.appendChild(oDiv);
				var oP1=document.createElement('p');
				var oP2=document.createElement('p');
				oP1.className='top1';
				oP2.className='bottom';
				oP1.innerHTML=aXuanXiangKas[i].p1;
				oP2.innerHTML=aXuanXiangKas[i].p2;
				oDiv.appendChild(oP1);
				oDiv.appendChild(oP2);
				var aUl=document.createElement('ul');
				aUl.className='tongyong';
				aLis.appendChild(aUl);
				var oLi1=document.createElement('li');
				aUl.appendChild(oLi1);
				var oImg=document.createElement('img');
				oImg.src=aXuanXiangKas[i].img;
				oLi1.appendChild(oImg);
				var oLi2=document.createElement('li');
				oLi2.innerHTML=aXuanXiangKas[i].name;
				aUl.appendChild(oLi2);
				var oLi3=document.createElement('li');
				oLi3.innerHTML=aXuanXiangKas[i].jieshao;
				aUl.appendChild(oLi3);
				var oLi4=document.createElement('li');
				var oSpan=document.createElement('span');
				var oDel=document.createElement('del');
				oSpan.innerHTML=aXuanXiangKas[i].jiage;
				oDel.innerHTML=aXuanXiangKas[i].del;
				oLi4.appendChild(oSpan);
				oLi4.appendChild(oDel);
				aUl.appendChild(oLi4);
			}
			
		}
	}
}
function xuanxiangka5(){
	var aLi=document.querySelectorAll('.peijian .caption .you ul li');
	var oUl=document.querySelector('.peijian .bt-you ul');	
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		init(0);
		aLi[0].className='active';
		aLi[i].onmouseenter = function(){
			init(this.index);
			for(var j=0;j<aLi.length;j++){
				aLi[j].className='';
			}
			this.className='active';
		}
	}
	function init(index){
		var aXuanXiangKas=xuanxiangkaItem5[index]; 
		if(!aXuanXiangKas){
			return;
		}
		oUl.innerHTML='';
		for(var i=0;i<aXuanXiangKas.length;i++){
			if(i==7){
				var aLi7=document.createElement('li');
				aLi7.className='kuan1 huowu';
				oUl.appendChild(aLi7);
				var oDiv1=document.createElement('div');
				var oDiv2=document.createElement('div');
				oDiv1.className='ss';
				oDiv2.className='xx';
				aLi7.appendChild(oDiv1);
				aLi7.appendChild(oDiv2);
				var oDiv3=document.createElement('div');
				var oDiv4=document.createElement('div');
				var oDiv5=document.createElement('div');
				oDiv1.appendChild(oDiv3);
				oDiv2.appendChild(oDiv4);
				oDiv2.appendChild(oDiv5);
				var oPp1=document.createElement('p');
				var oPp2=document.createElement('p');
				var oPp3=document.createElement('p');
				var oPp4=document.createElement('p');
				oDiv3.appendChild(oPp1);
				oDiv3.appendChild(oPp2);
				oDiv4.appendChild(oPp3);
				oDiv4.appendChild(oPp4);
				var oA1=document.createElement('a');
				var oA2=document.createElement('a');
				var oA3=document.createElement('a');
				var oA4=document.createElement('a');
				oA1.href='javascript:';
				oA1.innerHTML=aXuanXiangKas[7].name;				
				oA2.href='javascript:';
				oA3.href='javascript:';
				oA4.href='javascript:';
				oPp1.appendChild(oA1);
				oDiv1.appendChild(oA2);
				oPp3.appendChild(oA3);
				oDiv5.appendChild(oA4);
				var oI=document.createElement('i');
				oI.className='iconfont';
				oA4.appendChild(oI);
				var oImg1=document.createElement('img');
				oA2.appendChild(oImg1);
				oPp2.innerHTML=aXuanXiangKas[7].jiage;
				oImg1.src=aXuanXiangKas[7].img;
				oA3.innerHTML=aXuanXiangKas[7].name1;
				oPp4.innerHTML=aXuanXiangKas[7].fenlei;
				oI.innerHTML=aXuanXiangKas[7].ibiao;
			}else{
				var aLis=document.createElement('li');
				aLis.className='kuan1 huowu biaoqian jjbiaoqian';
				oUl.appendChild(aLis);
				var oDiv=document.createElement('div');
				oDiv.className='pinlun';
				oDiv.style.zIndex='2';
				aLis.appendChild(oDiv);
				var oP1=document.createElement('p');
				var oP2=document.createElement('p');
				oP1.className='top1';
				oP2.className='bottom';
				oP1.innerHTML=aXuanXiangKas[i].p1;
				oP2.innerHTML=aXuanXiangKas[i].p2;
				oDiv.appendChild(oP1);
				oDiv.appendChild(oP2);
				var aUl=document.createElement('ul');
				aUl.className='tongyong';
				aLis.appendChild(aUl);
				var oLi1=document.createElement('li');
				aUl.appendChild(oLi1);
				var oImg=document.createElement('img');
				oImg.src=aXuanXiangKas[i].img;
				oLi1.appendChild(oImg);
				var oLi2=document.createElement('li');
				oLi2.innerHTML=aXuanXiangKas[i].name;
				aUl.appendChild(oLi2);
				var oLi3=document.createElement('li');
				oLi3.innerHTML=aXuanXiangKas[i].jieshao;
				aUl.appendChild(oLi3);
				var oLi4=document.createElement('li');
				var oSpan=document.createElement('span');
				var oDel=document.createElement('del');
				oSpan.innerHTML=aXuanXiangKas[i].jiage;
				oDel.innerHTML=aXuanXiangKas[i].del;
				oLi4.appendChild(oSpan);
				oLi4.appendChild(oDel);
				aUl.appendChild(oLi4);
			}
			
		}
	}
}function xuanxiangka6(){
	var aLi=document.querySelectorAll('.zhoubian .caption .you ul li');
	var oUl=document.querySelector('.zhoubian .bt-you ul');	
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		init(0);
		aLi[0].className='active';
		aLi[i].onmouseenter = function(){
			init(this.index);
			for(var j=0;j<aLi.length;j++){
				aLi[j].className='';
			}
			this.className='active';
		}
	}
	function init(index){
		var aXuanXiangKas=xuanxiangkaItem6[index]; 
		if(!aXuanXiangKas){
			return;
		}
		oUl.innerHTML='';
		for(var i=0;i<aXuanXiangKas.length;i++){
			if(i==7){
				var aLi7=document.createElement('li');
				aLi7.className='kuan1 huowu';
				oUl.appendChild(aLi7);
				var oDiv1=document.createElement('div');
				var oDiv2=document.createElement('div');
				oDiv1.className='ss';
				oDiv2.className='xx';
				aLi7.appendChild(oDiv1);
				aLi7.appendChild(oDiv2);
				var oDiv3=document.createElement('div');
				var oDiv4=document.createElement('div');
				var oDiv5=document.createElement('div');
				oDiv1.appendChild(oDiv3);
				oDiv2.appendChild(oDiv4);
				oDiv2.appendChild(oDiv5);
				var oPp1=document.createElement('p');
				var oPp2=document.createElement('p');
				var oPp3=document.createElement('p');
				var oPp4=document.createElement('p');
				oDiv3.appendChild(oPp1);
				oDiv3.appendChild(oPp2);
				oDiv4.appendChild(oPp3);
				oDiv4.appendChild(oPp4);
				var oA1=document.createElement('a');
				var oA2=document.createElement('a');
				var oA3=document.createElement('a');
				var oA4=document.createElement('a');
				oA1.href='javascript:';
				oA1.innerHTML=aXuanXiangKas[7].name;				
				oA2.href='javascript:';
				oA3.href='javascript:';
				oA4.href='javascript:';
				oPp1.appendChild(oA1);
				oDiv1.appendChild(oA2);
				oPp3.appendChild(oA3);
				oDiv5.appendChild(oA4);
				var oI=document.createElement('i');
				oI.className='iconfont';
				oA4.appendChild(oI);
				var oImg1=document.createElement('img');
				oA2.appendChild(oImg1);
				oPp2.innerHTML=aXuanXiangKas[7].jiage;
				oImg1.src=aXuanXiangKas[7].img;
				oA3.innerHTML=aXuanXiangKas[7].name1;
				oPp4.innerHTML=aXuanXiangKas[7].fenlei;
				oI.innerHTML=aXuanXiangKas[7].ibiao;
			}else{
				var aLis=document.createElement('li');
				aLis.className='kuan1 huowu biaoqian jjbiaoqian';
				oUl.appendChild(aLis);
				var oDiv=document.createElement('div');
				oDiv.className='pinlun';
				oDiv.style.zIndex='2';
				aLis.appendChild(oDiv);
				var oP1=document.createElement('p');
				var oP2=document.createElement('p');
				oP1.className='top1';
				oP2.className='bottom';
				oP1.innerHTML=aXuanXiangKas[i].p1;
				oP2.innerHTML=aXuanXiangKas[i].p2;
				oDiv.appendChild(oP1);
				oDiv.appendChild(oP2);
				var aUl=document.createElement('ul');
				aUl.className='tongyong';
				aLis.appendChild(aUl);
				var oLi1=document.createElement('li');
				aUl.appendChild(oLi1);
				var oImg=document.createElement('img');
				oImg.src=aXuanXiangKas[i].img;
				oLi1.appendChild(oImg);
				var oLi2=document.createElement('li');
				oLi2.innerHTML=aXuanXiangKas[i].name;
				aUl.appendChild(oLi2);
				var oLi3=document.createElement('li');
				oLi3.innerHTML=aXuanXiangKas[i].jieshao;
				aUl.appendChild(oLi3);
				var oLi4=document.createElement('li');
				var oSpan=document.createElement('span');
				var oDel=document.createElement('del');
				oSpan.innerHTML=aXuanXiangKas[i].jiage;
				oDel.innerHTML=aXuanXiangKas[i].del;
				oLi4.appendChild(oSpan);
				oLi4.appendChild(oDel);
				aUl.appendChild(oLi4);
			}
			
		}
	}
}