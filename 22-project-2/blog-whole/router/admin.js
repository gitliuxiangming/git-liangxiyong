const Router=require('express').Router;
const router=Router();
const UserModel = require('../models/userModle.js');
const CommentModel = require('../models/comment.js');
const pagination = require('../util/pagination.js')
var multer  = require('multer')
var path  = require('path');
var fs  = require('fs');
var upload = multer({ dest: 'public/uploads/' })

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
	res.render('admin/index',{
		userInfo:req.userInfo
	})
});

//显示用户列表
router.get('/users',(req,res)=>{

	//获取所有用户的信息,分配给模板

	let options = {
		page: req.query.page,//需要显示的页码
		model:UserModel, //操作的数据模型
		query:{}, //查询条件
		projection:'_id username isAdmin', //投影，
		sort:{_id:-1} //排序
	}

	pagination(options)
	.then((data)=>{
		res.render('admin/user-list',{
			userInfo:req.userInfo,
			users:data.docs,
			page:data.page,
			list:data.list,
			pages:data.pages,
			url:'/admin/users'
		});	
	})
})

router.post('/uploadImages',upload.single('upload'),(req, res, next)=>{
	let path = "/uploads/"+req.file.filename;
	res.json({
		uploaded:true,
		url:path
	})
})

//显示用户评论列表
router.get('/comments',(req,res)=>{
	CommentModel.getPaginationComments(req)
	.then(data=>{
		res.render('admin/comment-list',{
			userInfo:req.userInfo,
			comments:data.docs,
			page:data.page,
			pages:data.pages,
			list:data.list
		})
	})
})

//删除评论
router.get("/comment/delete/:id",(req,res)=>{
	let id = req.params.id;
	CommentModel.remove({_id:id},(err,raw)=>{
		if(!err){
			res.render('admin/success',{
				userInfo:req.userInfo,
				message:'删除评论成功',
				url:'/admin/comments'
			})				
		}else{
	 		res.render('admin/error',{
				userInfo:req.userInfo,
				message:'删除评论失败,数据库操作失败'
			})				
		}		
	})

});


//显示站点管理页面
router.get("/site",(req,res)=>{
	let filePath = path.normalize(__dirname + '/../site-info.json');
	fs.readFile(filePath,(err,data)=>{
		if(!err){
			let site = JSON.parse(data);
			res.render('admin/site',{
					userInfo:req.userInfo,
					site:site
			});	
		}else{
			console.log(err)
		}
	})

})
//处理修改网站配置请求
router.post("/site",(req,res)=>{
	console.log(req.body)
})













module.exports = router;
