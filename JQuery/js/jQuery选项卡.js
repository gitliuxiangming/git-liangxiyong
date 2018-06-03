;(function($){
	$.fn.extend({
		tab:function(options){
			var default={
				btnClass:'.btn li',
				shijian:'click',
				active:'active1',
				contentClass:'.content li'
			}
			options=$.extend(default,options);
			$(options.btnClass).each(function(){
				$(this).on(options.shijian,function(){
					var index=$(this).index();
					$(this).addClass(options.active).siblings().removeClass(options.active);
					$(options.contentClass).eq(index).show().siblings().hide();
				})
			})
		},
	})
})(jQuery);