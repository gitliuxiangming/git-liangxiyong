;(function($){
	function Css3($elem){
		this.$elem=#elem;
		this.currutX = parsetFloat(this.$elem.css('left'));
		this.currutY = parsetFloat(this.$elem.css('top'));
	};
	Css3.prototype = {
		constrctor:Css3,
		to:function(x,y){			
			$elem.css('left',x).css('top',y);
		},
		x:function(){

		},
		y:function(){

		},
	}
})(jQuery);