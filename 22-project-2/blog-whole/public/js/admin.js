(function($){
	//退出
	$('#logout').on('click',function(){
		$.ajax({
			url:"/user/logout",
			dataType:'json',
			type:'get'
		})
		.done(function(result){
			if(result.code == 0){
				// window.location.reload();
				window.location.href = "/";
			}
		})
		.fail(function(err){
			console.log(err)
		})		
	});
	
})(jQuery);