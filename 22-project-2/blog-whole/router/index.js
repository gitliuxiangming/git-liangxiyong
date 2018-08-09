const Router=require('express').Router;
const CategoryModel = require('../models/categoryModel.js');
const router=Router();

router.get('/',(req,res)=>{
	CategoryModel.find({})
	.then((category)=>{
		res.render('main/index',{
			userInfo:req.userInfo,
			category:category
		});
	})
});

module.exports = router;



