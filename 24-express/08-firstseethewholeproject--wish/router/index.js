const Router=require('express').Router;
const router=Router();
const UserModel = require('../Model/wish.js');
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
module.exports=router;