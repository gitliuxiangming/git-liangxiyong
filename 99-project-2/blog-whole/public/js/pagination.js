(function ($) {
	$.fn.extend({
		pagination:function(){

			var self = this;
			this.on('click','a',function(){
				var $this = $(this);
				// console.log($this);
				var page = 1;
				var currentPage = self.find('.active a').html();
				var label = $this.attr('aria-label');

				if(label == 'Previous'){//上一页
					page = currentPage - 1;
				}else if(label == 'Next'){//下一页
					page = currentPage*1 + 1;
				}else{
					page = $(this).html();
				}

				var query = self.data('url') + '?page='+page;
				// var category = $('#cate-id').val();
				var id = self.data('id');

				if(id){
					query+="&id="+ id;
				}

				$.ajax({
					url:query,
					type:'get',
					dataType:'json'
				})
				.done(function(result){
					if(result.code == 0){
						/*buildArticleList(result.data.docs);
						buildPage(result.data.list,result.data.page)*/
						self.trigger('get-data',[result]);
					}
					// console.log(result)
				})
				.fail(function(err){
					console.log(err)
				})
			})
		}
	})
})(jQuery)
