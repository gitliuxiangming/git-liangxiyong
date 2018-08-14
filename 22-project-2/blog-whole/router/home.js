const Router=require('express').Router;
const router=Router();
const UserModel = require('../models/userModle.js');
const CommentModel = require('../models/comment.js');
const pagination = require('../util/pagination.js')
var multer  = require('multer')
var path  = require('path');
var fs  = require('fs');
var upload = multer({ dest: 'public/uploads/' })
const hmac = require('../util/hmac.js')

//权限控制
router.use((req,res,next)=>{
	if (req.userInfo._id){
		next();
	}else{
		res.send('<h1>请登录</h1>');
	}
})

//显示用户中心页面
router.get('/',(req,res)=>{
	res.render('home/index',{
		userInfo:req.userInfo
	})
});


//显示用户评论列表
router.get('/comments',(req,res)=>{
	CommentModel.getPaginationComments(req,{user:req.userInfo._id})
	.then(data=>{
		res.render('home/comment-list',{
			userInfo:req.userInfo,
			comments:data.docs,
			page:data.page,
			pages:data.pages,
			list:data.list,
			url:'/home/comments'
		})
	})
})

//删除评论
router.get("/comment/delete/:id",(req,res)=>{
	let id = req.params.id;
	CommentModel.remove({_id:id,user:req.userInfo._id},(err,raw)=>{
		if(!err){
			res.render('home/success',{
				userInfo:req.userInfo,
				message:'删除评论成功',
				url:'/home/comments'
			})				
		}else{
	 		res.render('home/error',{
				userInfo:req.userInfo,
				message:'删除评论失败,数据库操作失败'
			})				
		}		
	})

});


//显示修改密码
router.get('/password',(req,res)=>{
	res.render('home/password-add',{
		userInfo:req.userInfo
	});
})

//修改密码请求处理
router.post('/password',(req,res)=>{
	console.log(req);
	let body = req.body;
	UserModel.update({_id:req.userInfo._id},{
		password:hmac(body.password)
	})
	.then(raw=>{
		req.session.destroy();
		res.render('home/success',{
			userInfo:req.userInfo,
			message:'修改密码成功',
			url:'/'
		})
	})
})










module.exports = router;
