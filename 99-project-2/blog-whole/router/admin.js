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
			list:data.list,
			url:'/admin/comments'
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
	let body = req.body;
	let site = {
		name:body.name,
		author:{
			name:body.authorName,
			intro:body.authorIntro,
			image:body.authorImage,
			wechat:body.authorWechat
		},
		icp:body.icp
	}
	site.carouseles = [];
	
	if(body.carouselUrl.length && (typeof body.carouselUrl == 'object')){
		for(let i = 0;i<body.carouselUrl.length;i++){
			site.carouseles.push({
				url:body.carouselUrl[i],
				path:body.carouselPath[i]
			})			
		}
	}else{
		site.carouseles.push({
			url:body.carouselUrl,
			path:body.carouselPath
		})
	}


	site.ads = [];

	if(body.adUrl.length && (typeof body.adUrl == 'object')){
		for(let i = 0;i<body.adUrl.length;i++){
			site.ads.push({
				url:body.adUrl[i],
				path:body.adPath[i]
			})			
		}
	}else{
		site.ads.push({
			url:body.adUrl,
			path:body.adPath
		})
	}

	let strSite = JSON.stringify(site);

	let filePath = path.normalize(__dirname + '/../site-info.json');
	fs.writeFile(filePath,strSite,(err)=>{
		if(!err){
			res.render('admin/success',{
				userInfo:req.userInfo,
				message:'更新站点信息成功',
				url:'/admin/site'
			})				
		}else{
	 		res.render('admin/error',{
				userInfo:req.userInfo,
				message:'更新站点信息失败,文件写入失败'
			})				
		}
	})
})


//显示修改密码
router.get('/password',(req,res)=>{
	res.render('admin/password-add',{
		userInfo:req.userInfo
	});
})

//修改密码请求处理
router.post('/password',(req,res)=>{
	let body = req.body;
	UserModel.update({_id:req.userInfo._id},{
		password:hmac(body.password)
	})
	.then(raw=>{
		req.session.destroy();
		res.render('admin/success',{
			userInfo:req.userInfo,
			message:'修改密码成功',
			url:'/'
		})
	})
})










module.exports = router;
