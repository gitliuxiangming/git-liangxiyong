/*
* @Author: Tom
* @Date:   2018-07-25 14:33:24
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-31 15:33:53
*/

(function($){

	function getRandom(min,max) {	
		return Math.round(min + (max-min)*Math.random());
	}

	$wall = $('.wall');
	$wish = $('.wish');
	
	//获取墙的宽高和卡片的宽高
	var wallWidth = parseInt($wall.css('width'));
	var wallHeight = parseInt($wall.css('height'));
	var wishWidth = parseInt($wish.css('width'));
	var wishHeight = parseInt($wish.css('height'));
	
	function handleWish($elem){
		//显示卡片拖拽
		$elem.pep({  constrainTo: '.wall' });
		//随机显示卡片
		$elem.each(function(){
			$(this).css({
				transform:'matrix(1, 0, 0, 1, '+getRandom(0,wallWidth-wishWidth) +','+getRandom(0,wallHeight-wishHeight) +')'
			});
		});
		//改变显示顺序
		$elem.hover(function(){
			$(this).css({
				zIndex:999
			})
		},function(){
			$(this).css({
				zIndex:0
			})
		});		
	}

	handleWish($wish);

	//监听删除事件
	$wall.on('click','.close',function(){
		// console.log(this);
		var $this = $(this);
		var self = this;
		// console.log($this.data('id'));
		$.ajax({
			url:'/Wish/del/'+$this.data('id'),
			dataType:'json'
		})
		.done(function(data){
			if(data.status == 0){//删除成功
				//移除dom节点
				$(self.parentNode).remove();
			}
		})

	});

	//增加许愿卡
	$('.sub-btn').on('click',function(){
		let val = $('#content').val();
		$.ajax({
			url:'/Wish/add',
			data:{content:val},
			dataType:'json',
			type:'POST'
		})
		.done(function(data){
			//填充数据到dom节点并且插入
			console.log(data);
			if(data.status === 0){//成功
				var $dom = $(`<div class="wish" style="background: ${data.data.color}">
								<a href="javascript:;" class="close" data-id='${data.data._id}'></a>
									${data.data.content}
							   </div>`);
				$wall.append($dom);

				handleWish($dom);

				$('#content').val('');				
			}else{
				alert('许愿失败了');
			}
		})		
	});


})(jQuery);	
