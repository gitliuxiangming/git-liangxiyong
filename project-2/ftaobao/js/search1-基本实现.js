;(function($){
	var $searchForm=$('#search-form');
		$searchInput=$('.search-input');
		$searchLayer=$('.search-layer');

	$searchForm.on('submit',function(){
		if (getInputVal() ==''){
			return false;
		}
	});
	//当用户输入时动态获取提示数据
	var url = 'https://suggest.taobao.com/sug?code=utf-8&_ksTS=1528889766600_556&callback=jsonp557&k=1&area=c2c&bucketid=17&q=';
	$searchInput.on('input',function(){
		//获取服务器数据
		$.ajax({
			url:url+getInputVal(),
			dataType:'jsonp',
			jsonp:'callback'
		})
		.done(function(data){
			if(data.result.length == 0){
				$searchLayer.html('').hide();
				return;
			}
			
			var html='';
			
			var dataNum=10;

			for(var i=0;i<data.result.length;i++){
				if(i>=dataNum) break;
				html += '<li class="search-item">'+data.result[i][0]+'</li>'
			}
			$searchLayer.html(html).show();
		})
		.fail(function(err){
			$searchLayer.html('').hide();
		})
		.always(function(){
			// console.log('always me')
		})
	});
	//通过事件代理完成搜索下拉提示的提交
		$searchLayer.on('click','.search-item',function(){
			$searchInput.val(removeHTMLTag($(this).html()));
			$searchForm.trigger('submit');
		})

		$(document).on('click',function(){
			$searchLayer.hide();
		});

		$searchInput
		.on('focus',function(){
			if($.trim($searchLayer.html()) == ' '){
				$searchLayer.hide();
			}else{
				$searchLayer.show();
			}			
		})
		.on('click',function(ev){
			ev.stopPropagation();
		})

	function getInputVal(){
		return $.trim($searchInput.val());
	}	
	function removeHTMLTag(str){
		return str.replace(/<[^<|>]+>/g,'')
	}
})(jQuery);