const Router=require('express').Router;
const router=Router();
const UserModel = require('../Model/wish.js');
const uuidv1 = require('uuid/v1');
const querystring = require('querystring');
function getRandom(min,max){
	return Math.round(min+(max-min)*Math.random());
}
function getcolor(){
	var str='01a2345789';
	var colorz='';
	while(colorz.length<2){
		colorz+=str[getRandom(0,9)];
	}
	colorz='f'+colorz;
	colorz='#'+colorz;
	return colorz;
}

router.get('/',(req,res)=>{
	UserModel.find({},(err,data)=>{
			if(!err){	
				res.render('index',{
					data:data
				});	
			}else{
				console.log(err);
			}
		});
})
router.delete('/del/:id',(req,res)=>{
	let id=req.params.id;
	UserModel.deleteOne({id:id},(err)=>{
		if(!err){
			let result={
				status:0
			}
			let str=JSON.stringify(result);
			res.end(str);
		}else{
			console.log(err);
		}
	});
})
router.post('/add/',(req,res)=>{
	let data=req.body;
			data.color=getcolor();
			data.id=uuidv1();
			UserModel.insertMany(data,(err,data)=>{
				if (!err) {
					let result=JSON.stringify(data[0]);
					res.end(result)
				}else{
					console.log(err);
				}
			});
	
})
module.exports=router;