(function(w){
	function ajax(method,url,data,fnSucc,fnFaild){
		//1.创建ajax对象
		var oAjax=new XMLHttpRequest();
		if(methos=="POST"){
			//2.和服务器建立链接
			oAjax.open(method,url,true);
			//POST方法要在open和send之间添加一个请求头
			oAjax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			//3.发送请求(POST方法需要在send是传参数)
			oAjax.send(data);
			//4.监听方法获取数据
		}else{
			//2.和服务器建立链接
			if(data){
				url=url+"?"+data;	
			}
			oAjax.open(method,url,true);
			//3.发送请求(GET方法不需要在send是传参数)
			oAjax.send(data);
		}
		
		oAjax. onreadystatechange = function(){
			if(oAjax.readyState==4){//数据完全返回
				if (oAjax.status == 200) {					
					fnSucc(oAjax.responseText);
				}else{
					if(fnFaild){
						fnFaild(oAjax.status);
					}						
				}				
			}
		}
	}
	w.ajax=ajax;
})(window);