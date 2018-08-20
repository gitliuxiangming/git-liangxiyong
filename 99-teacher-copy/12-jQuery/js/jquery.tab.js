/*
* @Author: TomChen
* @Date:   2018-06-01 20:41:49
* @Last Modified by:   TomChen
* @Last Modified time: 2018-06-01 20:42:02
*/
;(function($){
	$.fn.extend({
		tab:function(options){
			var defaults = {
				activeClass:'active',
				btnSelector:'.btn>li',
				contentSelector:'.content>li',
				eventType:'click'
			}
			
			options = $.extend(defaults,options);

			this.each(function(){
				var $tab = $(this);
				var $btns = $tab.find(options.btnSelector);
				$btns.on(options.eventType,function(){
					$(this).addClass(options.activeClass).siblings().removeClass(options.activeClass);
					var index = $(this).index();
					$tab.find(options.contentSelector).eq(index).show().siblings().hide();
				});

			})
		}
	});
})(jQuery);