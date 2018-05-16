//刘向明
//调用定义的事件函数
gouwuche();	
xuanfuzhanshi();
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
function xuanfuzhanshi(){
	var aLiA=document.querySelectorAll('.nav .nav2 a');
	var oBigBox=document.querySelector('.shoujizhanshi');
	for(var i=0;i<aLiA.length;i++){
		var time=null;
		aLiA[i].onmouseenter = function(){
			clearTimeout(time);
			oBigBox.style.borderTop='1px solid #ccc';
			animation(oBigBox,{height:210});
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
}
