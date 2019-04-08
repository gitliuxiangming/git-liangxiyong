const Router=require('express').Router;
const router=Router();
const UserModel = require('../models/userModle.js');
const hmac = require('../util/hmac.js')

//注册
router.post('/register',(req,res)=>{
	let body = req.body;
	let result = {
		code : 0,
		message :'',
	}
	UserModel
	.findOne({username:body.username})
	.then(function(user){
		
		if(user){
			result.code = 10,
			result.message = '用户名已存在',
			res.json(result)
		}else{
			let userMessage = new UserModel({
				username:body.username,
				password:hmac(body.password),
				// isAdmin:true
			});
			userMessage.save((err,data)=>{
				if(!err){
					res.json(result);
				}else{
					result.code = 10,
					result.message = '注册失败',
					res.json(result)
				}
			})
		}
	})
});

//登陆
router.post("/login",(req,res)=>{
	let body = req.body;
	//定义返回数据
	let result  = {
		code:0,// 0 代表成功 
		message:''
	}
	UserModel
	.findOne({username:body.username,password:hmac(body.password)})
	.then((user)=>{
		if(user){//登录成功
			/*
			 result.data = {
			 	_id:user._id,
			 	username:user.username,
			 	isAdmin:user.isAdmin
			 }
			 */
			 // req.cookies.set('userInfo',JSON.stringify(result.data));
			 req.session.userInfo = {
			 	_id:user._id,
			 	username:user.username,
			 	isAdmin:user.isAdmin
			 }
			 res.json(result);
		}else{
			result.code = 10;
			result.message = '用户名和密码错误'
			res.json(result);
		}
	})

})

//退出
router.get('/logout',(req,res)=>{
	let result  = {
		code:0,// 0 代表成功 
		message:''
	}	
	// req.cookies.set('userInfo',null);
	req.session.destroy();

	res.json(result);

})

module.exports = router;







