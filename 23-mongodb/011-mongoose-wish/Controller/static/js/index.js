(function($){
	function getRandom(max,min){
		return Math.round(min+(max-min)*Math.random());
	}

	$wish = $('.wish');
	$wall = $('.wall');
	$content = $('.content');

	let wallWidth = parseFloat($wall.css('width'));
	let wallheight = parseFloat($wall.css('height'));
	let wishWidth = parseFloat($wish.css('width'));
	let wishheight = parseFloat($wish.css('height'));

	function handle($elem){
		$elem.pep({constrainTo:'.wall'});
		//随机显示卡片
		$elem.each(function(){
			let $this = $(this);
			$this.css({
				transform:'matrix(1,0,0,1,'+getRandom(0,wallWidth-wishWidth)+','+getRandom(0,wallheight-wishheight)+')'
			})
			//更改显示前后
			$this.hover(function(){
				$this.css({
					zIndex:900,
				})
			},function(){
				$this.css({
					zIndex:0,
				})
			})
		})
	}


	handle($wish);
	//监听删除事件
	$wall.on('click','.close',function(){
		let $this = $(this);
		let self = this;
		$.ajax({
			url:'/wish/del/'+$this.data('id'),
			type:'get',
			dataType:'json'
		})
		.done(function(data){
			if(data.status ==0){//删除成功
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
 		//填充数据到dom节点，并且插入
 		// console.log(data);
 		let $dom = '';
 		$dom = $(`<div class="wish" style="background:${data.data.color};">
				<a href="javascript:;" class="close" data-id="${data.data._id}"></a>
				${data.data.content}
				</div>`);
		$wall.append($dom);
		val = $('#content').val('');
		handle($dom);
        })      
    });



})(jQuery);