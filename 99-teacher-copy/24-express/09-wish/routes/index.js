/*
* @Author: TomChen
* @Date:   2018-08-04 17:15:25
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-04 17:19:23
*/
const Router = require('express').Router;
const WishModel = require('../models/wish.js')

const router = Router();

//显示首页
router.get("/",(req,res)=>{
	WishModel.find({},(err,data)=>{
		if(!err){
			res.render('index',{
				data:data
			})
		}else{
			console.log(err);
		}			
	})
})

module.exports = router;