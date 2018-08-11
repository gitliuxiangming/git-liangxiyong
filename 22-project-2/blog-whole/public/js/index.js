
(function($){
	var $login = $('.login');
	var $register = $('.register');
	var $logout = $('.logout');
	$('#register').on('click',()=>{
		$login.hide();
		$register.show();
	})

	$('#login').on('click',()=>{
		$register.hide();
		$login.show();
	})
	//验证的正则
	let usernameReg = /^\w{3,10}$/i;
	let passwordReg = /^.{3,6}$/i;

	// 注册验证
	$('.register-btn').on('click',function(){
		var username=$('#register-username').val();
		var password=$('#register-password').val();
		var repassword=$('#repassword').val();
		var errMsg='';
		if(!usernameReg.test(username)){
			errMsg='请输入3-10位，支持数字,字母和下划线';	
		}else if(!passwordReg.test(password)){
			errMsg='请输入3-6位密码';
		}else if(password !== repassword){
			errMsg='两次密码输入不一致';
		}
		if (errMsg) {
			$('.err').html(errMsg);
		} else {
			$('.err').html('');
			$.ajax({
				url:'/user/register',
				type:'POST',
				dataType:'json',
				data:{
					username:username,
					password:password
				}
			})
			.done((result)=>{
				if(result.code === 0){
					$('#login').trigger('click');
				}else{
					$('.err').html(result.message);
				}
				
			})
			.fail((err)=>{
				console.log(err);
			})
		}
	})

	//登陆验证
	
	$('.sub-btn').on('click',function(){
		var username=$('#username').val();
		var password=$('#password').val();
		var errMsg='';
		var $err = $login.find('.err');

		if(!usernameReg.test(username)){
			errMsg='请输入3-10位，支持数字,字母和下划线';	
		}else if(!passwordReg.test(password)){
			errMsg='请输入3-6位密码';
		}
		if (errMsg) {
			$err.html(errMsg);
			return;
		} 
		else {
			$err.html('');
			$.ajax({
				url:'/user/login',
				type:'POST',
				dataType:'json',
				data:{
					username:username,
					password:password
				}
			})
			.done((result)=>{
				if(result.code === 0){
					// $logout.show();
					// $login.hide();
					window.location.reload();
				}else{
					$err.html(result.message);
				}
				
			})
			.fail((err)=>{
				console.log(err);
			})
		}
	})
	
	//退出
	$('#logout').on('click',function(){
		$.ajax({
			url:"/user/logout",
			dataType:'json',
			type:'get'
		})
		.done(function(result){
			if(result.code == 0){
				window.location.reload();
			}
		})
		.fail(function(err){
			console.log(err)
		})		
	});

//发送文章列表的请求
	 $('#page').on('click','a',function(){
	 	var $this = $(this);

	 	var page = 1;
	 	var currentPage = $('#page').find('.active a').html();
	 	if($this.attr('aria-label') == 'Previous'){//上一页
	 		page = currentPage - 1;
	 	}else if($this.attr('aria-label') == 'Next'){//下一页
	 		page = currentPage*1 + 1;
	 	}else{
	 		page = $(this).html();
	 	} 

	 	$.ajax({
	 		url:'/articles?page='+page,
	 		type:'get',
	 		dataType:'json'
	 	})
	 	.done(function(result){
	 		if(result.code == 0){
	 			buildArticleList(result.data.docs);
	 			buildPage(result.data.docs,result.data.page)
	 		}
	 	})
	 	.fail(function(err){
	 		console.log(err);
	 	})

	 })

	 function buildArticleList(articles){
	 	var html = '';
	 	for(var i = 0;i<articles.length;i++){
	 	var data = moment(articles[i].createdAt).format('YYYY年MM月DD日 h:mm:ss ');
	 	html +=`<div class="panel panel-default content-item">
			  <div class="panel-heading">
			    <h3 class="panel-title">
			    	<a href="/view/${articles[i]._id}" class="link" target="_blank">${ articles[i].title }</a>
				</h3>
			  </div>
			  <div class="panel-body">
				${ articles[i].intro }
			  </div>
			  <div class="panel-footer">
				<span class="glyphicon glyphicon-user"></span>
				<span class="panel-footer-text text-muted">
					${ articles[i].user.username }
				</span>
				<span class="glyphicon glyphicon-th-list"></span>
				<span class="panel-footer-text text-muted">
					${ articles[i].category.name }
				</span>
				<span class="glyphicon glyphicon-time"></span>
				<span class="panel-footer-text text-muted">
					${ data }
				</span>
				<span class="glyphicon glyphicon-eye-open"></span>
				<span class="panel-footer-text text-muted">
					<em>${ articles[i].click }</em>已阅读
				</span>
			  </div>
			</div>`
		}
		$('#article-list').html(html);
	 }

	 function buildPage(list,page){
		var html='';
		html+=`
			<li>
		      <a href="javascript:;" aria-label="Previous">
		        <span aria-hidden="true">&laquo;</span>
		      </a>
		    </li>
		`;
		for(let i=1;i<=list.length;i++){
			if(i==page){
				html+=`<li class="active"><a href="javascript:;">${ i }</a></li>`
			}else{
				html+=`<li><a href="javascript:;">${ i }</a></li>`
			}
		}
		html+=`
			<li>
		      <a href="javascript:;" aria-label="Next">
		        <span aria-hidden="true">&raquo;</span>
		      </a>
		    </li>
		`

		$('#page .pagination').html(html);
	}	



})(jQuery)