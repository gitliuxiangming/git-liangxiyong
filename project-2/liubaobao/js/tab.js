/*
* @Author: TomChen
* @Date:   2018-07-05 10:36:38
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-06 15:56:13
*/
;(function($){

	function tab($elem,options){
		var self=this;
		this.$elem = $elem;
		this.options = options;
		this.$tabItems = this.$elem.find('.tab-item');
		this.itemNum = this.$tabItems.length;
		this.$tabPanels = $elem.find('.tab-panel');

		this.now = this._getCorrectIndex(options.activeIndex);
		this._init();
	}
	tab.prototype = {
		constructor:tab,
		_init:function(){
			//初始化页面
			this.$tabItems.eq(this.now).addClass('tab-item-active');
			this.$tabPanels.eq(this.now).show();
			//绑定事件
			this.options.eventName = this.options.eventName == 'click' ? 'click' : 'mouseenter';
			this.$elem.on(this.options.eventName,'.tab-item',function(){
				var index=self.$tabItems.index(this);
				self.toggle(index);
			})
		},
		//绑定事件
		toggle:function(index){
			//隐藏当前的
			this.$tabItems.eq(this.now).removeClass('tab-item-active');
			this.$tabPanels.eq(this.now).hide();
			//显示index对应的
			this.$tabItems.eq(index).addClass('tab-item-active');
			this.$tabPanels.eq(index).show();
			this.now=index;
		}
		_getCorrectIndex(index){
			if(index >= this.itemNum) return 0;
			if(index < 0) return (this.itemNum - 1);
			return index;
		}
	}

	tab.DEFAULTS = {
		eventName:'mouseenter',
		activeIndex:1,
	}
		
	}

	$.fn.extend({
		tab:function(options){
			return this.each(function(){
				var $this = $(this);
				var tab = $this.data('tab');
				if(!tab){//单例模式
					options  = $.extend({},tab.DEFAULTS,options);
					tab = new tab($(this),options);
					$this.data('tab',tab);
				}
				if(typeof tab[options] == 'function'){
					tab[options]();
				}
			});
		}
	})

})(jQuery);