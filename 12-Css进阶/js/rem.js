(function(win,doc){
	var oRoot = doc.getElementsByTagName('html')[0];
	function refreshFontSize(){
		var iWidth = doc.body.clientWidth || win.documentElement.clientWidth;
		var iFontSize = iWidth / 10;
		oRoot.style.fontSize = iFontSize + 'px';
	}
	win.addEventListener('resize',refreshFontSize,false);
	doc.addEventListener('DOMContentLoaded',refreshFontSize,false);
})(window,document);