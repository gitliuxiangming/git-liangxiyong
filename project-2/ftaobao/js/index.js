// 刘向明的仿电商页面的全部脚本语言
 ;(function($){

// 顶部下拉菜单开始
	var $dropdown=$('.dropdown')
	$dropdown.on('dropdown-show',function(ev){
		// console.log(this);
		var $this = $(this);
		//当需要显示时从服务器获取数据并且加载

		//获取需要请求的地址
		var loadUrl = $this.data('load');
		//如果页面上没有设置请求地址直接返回
		if(!loadUrl) return;

		var isLoaded = $this.data('isLoaded');
		//如果已经加载过数据了直接返回
		if(isLoaded) return;
		
		//如果有请求地址,发送请求获取数据
		$.getJSON(loadUrl,function(data){
			console.log(data);
			var html = '';
			for(var i = 0;i<data.length;i++){
				html += '<li><a href="'+data[i].url+'" class="menu-item">'+data[i].name+'</a></li>';
			}
			//模拟网络延时
			setTimeout(function(){
				$this.find('.dropdown-layer').html(html);
				$this.data('isLoaded',true);
			},1000);
		});

	});
	$dropdown.dropdown({
		css3:false,
		js:true,
		mode:'slideUpDown',
	});
// 顶部下拉菜单结束

// 搜索框开始
	var $search=$('.search')
	$search.search({
		autocomplete:true
	});
	$search
	.on('getData',function(ev,data){				
		var $this=$(this);
		var html=createSearchLayer(data,10);
		// $searchLayer.html(html).showHide('show');	
		$this.search('appendLayer',html).search('showLayer');
	})
	.on('getNoData',function(){
		// $searchLayer.html('').showHide('hide');
		$this.search('appendLayer','').search('hideLayer');
	})
	.on('click','.search-item',function(){
		var $this=$(this)
		// $searchInput.val(removeHTMLTag($(this).html()));
		// $searchForm.trigger('submit');
		$search.search('setInputVal',$(this).html());
		$search.search('submit');
	})

	function createSearchLayer(data,maxNum){
		if(data.result.length == 0){
			return '';
		}
		var html='';
		for(var i=0;i<data.result.length;i++){
			if(i>=maxNum) break;
			html += '<li class="search-item">'+data.result[i][0]+'</li>'
		}
		return html;
	}
// 搜索框结束

})(jQuery);