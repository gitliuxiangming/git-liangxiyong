;(function($){
	$son=$('.son');
	$parent=$('.parent');
	$btn=$('.btn');
	$son.pep({constrainTo:'.parent'});

	function getRandom(min,max){
		return Math.round(min+(max-min)*Math.random());
	}
	var parentWidth=parseInt($parent.css('width'));
	var parentHeight=parseInt($parent.css('height'));
	var sonWidth=parseInt($son.css('width'));
	var sonHeight=parseInt($son.css('height'));

	$son.each(function(){
		$(this).css({
			transform: 'matrix(1, 0, 0, 1,'+getRandom(0,parentWidth-sonWidth)+','+getRandom(0,parentHeight-sonHeight)+')',
		})
	});
	$son.hover(function(){
		$(this).css({
			zIndex:999
		})
	},function(){
		$(this).css({
			zIndex:0
		})
	})
	$parent.on('click','.del',function(){
		let self=this;
		$.ajax({
			url:'/del/'+$(this).data('id'),
			dataType:'json',
			type:'DELETE'
		})
		.done(function(data){
			if(data.status==0){
				$(self.parentNode).remove();
			}
			
		})
	});
	$btn.on('click',()=>{
		let val=$('.word').val();
		$.ajax({
			url:'/add/',
			data:{content:val},
			dataType:'json',
			type:'POST'
		})
		.done((data)=>{
			$dom=$(`
				<div class="son"  style="background:${data.color}">
					<a href="javascript:;" class="del" data-id='${data.id}'>X</a>
					${data.content}
				</div>
				`);
			$parent.append($dom);
			$dom.pep({constrainTo:'.parent'});
			$dom.css({
					transform: 'matrix(1, 0, 0, 1,'+getRandom(0,parentWidth-sonWidth)+','+getRandom(0,parentHeight-sonHeight)+')',
				})
			$dom.hover(function(){
				$(this).css({
					zIndex:999
				})
			},function(){
				$(this).css({
					zIndex:0
				})
			})
			
		
		})
	})


})(jQuery)
