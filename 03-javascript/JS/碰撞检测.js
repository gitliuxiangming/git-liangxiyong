function checkKiss(oDiv1,oDiv2){
	if(	
		(oDiv1.offsetTop+oDiv1.offsetHeight)>oDiv2.offsetTop && 
		(oDiv1.offsetLeft+oDiv1.offsetWidth)> oDiv2.offsetLeft &&
		(oDiv2.offsetLeft+oDiv2.offsetWidth) > oDiv1.offsetLeft &&
		(oDiv2.offsetTop+oDiv2.offsetHeight) > oDiv1.offsetTop
		){
		return true;
	}else{
		return false;
	}
}