
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







})(jQuery)