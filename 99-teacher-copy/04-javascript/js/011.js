/*
* @Author: TomChen
* @Date:   2018-04-13 18:38:12
* @Last Modified by:   TomChen
* @Last Modified time: 2018-04-13 18:38:23
*/
window.onload = function(){
	function toRed(){
		document.getElementById('box').style.background = 'red';
	}
	document.getElementById('box').onclick = toRed;
}