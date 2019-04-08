
(function($){
	// 修改验证
	$('#btn-sub').on('click',function(){

		let passwordReg = /^\w{3,6}$/i;
		var password=$('#inputPassword2').val();
		var repassword=$('#inputPassword3').val();
		var $err=$('.err');
		console.log(repassword);

		if(!passwordReg.test(password)){
			// console.log('asdf')
			$err.eq(0).html('请输入3-10位，支持数字,字母和下划线')	
			return false;
		}else{
			$err.eq(0).html('')
		}

		if(password !== repassword){
			$err.eq(1).html('两次输入密码不一致');
			return false;
		}else{
			$err.eq(1).html('')
		}

	})

})(jQuery)