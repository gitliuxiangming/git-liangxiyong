/*
* @Author: TomChen
* @Date:   2018-07-16 09:56:42
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-16 09:56:55
*/
(function(win,doc){
	//1.获取根元素
	var oRoot = doc.getElementsByTagName('html')[0];
	
	function refreshFontSize(){
		//2.获取设备的宽
		var iWidth = doc.body.clientWidth || doc.documentElement.clientWidth;
		//3.根据设备的宽计算出根元素的fontSize
		var iFontSize = iWidth / 10;
		oRoot.style.fontSize = iFontSize + 'px';			
	}


	win.addEventListener('resize',refreshFontSize,false);
	doc.addEventListener('DOMContentLoaded',refreshFontSize,false);

})(window,document);