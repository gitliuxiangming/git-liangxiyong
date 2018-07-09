/*
* @Author: TomChen
* @Date:   2018-06-08 20:17:35
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-06 17:18:31
*/
;(function($){

	function loadHtmlOnce($elem,callBack){
		//获取需要请求的地址
		var loadUrl = $elem.data('load');
		//如果页面上没有设置请求地址直接返回
		if(!loadUrl) return;

		var isLoaded = $elem.data('isLoaded');
		//如果已经加载过数据了直接返回
		if(isLoaded) return;		
		//如果有请求地址,发送请求获取数据
		$.getJSON(loadUrl,function(data){
			console.log('get data ...',data);
			callBack($elem,data);
		});		
	}

	function loadImage(url,success,error){
		var image = new Image();

		image.onload = function(){
			if(typeof success == 'function') success(url);
		}

		image.onerror = function(){
			if(typeof error == 'function') error(url);
		}

		image.src = url;		
	}
	/*顶部下拉菜单开始*/
	var $menu = $('.nav-site .dropdown');
	
	$menu.on('dropdown-show',function(ev){
		loadHtmlOnce($(this),buildMenuItem)
	});
	//构建菜单并加重
	function buildMenuItem($elem,data){
		var html = '';
		for(var i = 0;i<data.length;i++){
			html += '<li><a href="'+data[i].url+'" class="menu-item">'+data[i].name+'</a></li>';
		}
		//模拟网络延时
		setTimeout(function(){
			$elem.find('.dropdown-layer').html(html);
			$elem.data('isLoaded',true);
		},1000);
	}
	$menu.dropdown({
		css3:false,
		js:true,
		mode:'slideUpDown'
	});

	/*顶部下拉菜单结束*/
	
	/*搜索框开始*/

	var $search = $('.search');
	
	//search插件初始化
	$search.search({
		autocomplete:true,
		getDataInterval:0
	});
	
	$search
	.on('getData',function(ev,data){
			var $this = $(this);
			var html = createSearchLayer(data,10);	
			$this.search('appendLayer',html);
			if(html){
				$this.search('showLayer');
			}else{
				$this.search('hideLayer');
			}
	})
	.on('getNoData',function(){
		$search.search('appendLayer','').search('hideLayer');
	})
	.on('click','.search-item',function(){
		$search.search('setInputVal',$(this).html());
		$search.search('submit');

	});

	function createSearchLayer(data,maxNum){
		if(data.result.length == 0){
			return '';
		}		
		var html = '';
		for(var i = 0;i<data.result.length;i++){
			if(i>=maxNum) break;
			html += '<li class="search-item">'+data.result[i][0]+'</li>'
		}
		return html;
	}
	/*搜索框结束*/	

	/*分类导航开始*/
	var $category = $('.category .dropdown');

	$category.on('dropdown-show',function(ev){

		loadHtmlOnce($(this),buildCategorItem);

	});
	function buildCategorItem($elem,data){
		var html = '';
		for(var i = 0;i<data.length;i++){
			html += '<dl class="category-details clearfix"><dt class="category-details-title fl"><a href="#" class="category-details-title-link">'+data[i].title+'</a></dt><dd class="category-details-item fl">';
			for(var j = 0;j<data[i].items.length;j++){
				html += '<a href="#" class="link">'+data[i].items[j]+'</a>'
			}
			html += '</dd></dl>';
		}
		//模拟网络延时
		setTimeout(function(){
			$elem.find('.dropdown-layer').html(html);
			$elem.data('isLoaded',true);
		},1000);		
	}

	$category.dropdown({
		css3:false,
		js:true,
		mode:'slideLeftRight'
	});

	/*分类导航结束*/

	// 轮播图的按需加载函数
	function carouselImgLoadOnce($elem){
		var item = {},
		totalItemNum =  $elem.find('.carousel-img').length,
		loadedItemNum = 0,
		loadFn=null;
		
		$elem.on('carousel-show',$elem.loadFn = function(ev,index,elem){
			if(item[index] != 'loaded'){
				$elem.trigger('carousel-loadItem',[index,$elem])
			}
		});

		$elem.on('carousel-loadItem',function(ev,index,elem){
			var $img = $($elem).find('.carousel-img');
			$img.each(function(){
				var $this=$(this);
				var imgUrl = $this.data('src');
				loadImage(imgUrl,function(url){
					$this.attr('src',url);
				},function(url){
					$this.attr('src','images/focus-carousel/placeholder.png');
				});
				item[index] = 'loaded';
				loadedItemNum++;
				if(loadedItemNum == totalItemNum){
					$elem.trigger('carousel-loadedItems');
				}					
			})
			$elem.on('carousel-loadedItems',function(){
				$elem.off('carousel-show',loadFn)
			});	
		});
	}

	/*中心轮播图开始*/
	var $focusCarousel = $('.focus .carousel-container');
	/*
	按需加载的步骤
		1. 确定什么时候加载
		2. 具体的加载
		3. 加载完成的善后
	*/
	carouselImgLoadOnce($focusCarousel);

	/*调用轮播图插件*/
	$focusCarousel.carousel({
		activeIndex:0,
		mode:'slide',
		interval:0
	});

	/*中心轮播图结束*/
	/*今日热销开始*/
	var $todaysCarousel = $('.todays .carousel-container');
	carouselImgLoadOnce($todaysCarousel);
	$todaysCarousel.carousel({
		activeIndex:0,
		mode:'slide',
		interval:0
	});
	/*今日热销结束*/
	/*楼层开始*/

	// 楼层的按需加载函数
	function floorImgLoadOnce($elem){
		var item = {},
		totalItemNum =  $elem.find('.floor-img').length,
		loadedItemNum = 0,
		loadFn=null;
		
		$elem.on('tab-show',$elem.loadFn = function(ev,index,elem){
			if(item[index] != 'loaded'){
				$elem.trigger('tab-loadItem',[index,$elem])
			}
		});
		$elem.on('tab-loadItem',function(ev,index,elem){
			console.log('aa')
			var $img = $($elem).find('.floor-img');
			$img.each(function(){
				var $this=$(this);
				var imgUrl = $this.data('src');
				loadImage(imgUrl,function(url){					
					setTimeout(function(){
						$this.attr('src',url);
					},1000)
				},function(url){
					$this.attr('src','images/floor/placeholder.png');
				});
				item[index] = 'loaded';
				loadedItemNum++;
				if(loadedItemNum == totalItemNum){
					$elem.trigger('tab-loadedItems');
				}					
			})
			$elem.on('tab-loadedItems',function(){
				$elem.off('tab-show',loadFn)
			});	
		});
	}

	// 楼层选项卡插件调用
	var $floors=$('.floor');
	$floors.each(function(){
		floorImgLoadOnce($(this));
	})
	$floors.tab({
		css3:false,
		js:false,
		mode:'fade',
		eventName:'mouseenter',
		activeIndex:0,
		delay:200,
		interval:0
	})
	/*楼层结束*/
	
})(jQuery);
