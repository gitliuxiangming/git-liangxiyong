// obj=是谁要做什么
// opation=是一个Json，调用时用中括号包括，用法{属性名称：值（数字），属性名称2：值......}
// sudu=一个布尔值，true是匀速运动，false是减速运动
/* fn=一个匿名函数，用作链式调用。
Ex：animation(obj,{width:100,height；100}，true,function(){
	animation(obj,{width:100,height；100}，true)
})
*/
function animation(obj,opation,sudu,fn){
				clearInterval(obj.time);
				var speed=0;
				var stop=false;				
				obj.time = setInterval(function(){
					var stopall=true;
					for(attr in opation){
						var dqz=parseFloat(getComputedStyle(obj,true)[attr]);
						if(attr == 'opacity'){
							dqz=dqz*100;
						}
						if (sudu) {
							if(dqz<=opation[attr]){
								speed= 10;
							}else{
								speed= -10;
							}
							if (Math.abs(opation[attr]-dqz)<Math.abs(speed)) {
								stop=true;								
							}else{
								stopall=false;
							}
						}else{
							speed=(opation[attr]-dqz)/20;
							speed=speed>0 ? Math.ceil(speed) : Math.floor(speed);
							if (!speed) {
								stop=true;
							}else{
								stopall=false;
							}
						}					
						if(stop){							
							if(attr == 'opacity'){
								obj.style[attr]=opation[attr]/100;
							}else{
								obj.style[attr] = opation[attr]+'px';
							}
						}else{
							if(attr == 'opacity'){
								obj.style[attr]=(dqz+speed)/100;
							}else{
								obj.style[attr] = dqz+speed+'px';
							}
						}
					}
					if (stopall) {
						clearInterval(obj.time);
						if(fn){
							fn();
						}
					}
				},30)
			}