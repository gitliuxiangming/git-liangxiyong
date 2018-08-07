const Router=require('express').Router;
const router=Router();
const UserModel = require('../models/userModle.js');

//权限控制
router.use((req,res,next)=>{
	if (req.userInfo.isAdmin){
		next();
	}else{
		res.send('<h1>请登录管理员账户</h1>');
	}
})

//显示管理员页面
router.get('/',(req,res)=>{
	res.render('admin/category-list',{
		userInfo:req.userInfo
	})
});

module.exports = router;
