;(function($){
	$.fn.extend({
		dropdown:function(){
			return this.each(function(){
				var $this = $(this);
				var activeClass = $this.data('active') + '-active';
				var $layer = $this.find('.dropdown-layer');
				//初始化显示隐藏模块
				$layer.showHide({
					css3:true,
					js:true,
					mode:'slideUpDown'
				});
				$this.hover(function(){
					//显示下拉层
					$layer.showHide('show');
					$this.addClass(activeClass);
				},function(){
					//隐藏下拉层
					$layer.showHide('hide');
					$this.removeClass(activeClass);	
				});
			});
		}
	})
})(jQuery);