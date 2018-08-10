
const Router = require('express').Router;
const ArticleModel = require('../models/article.js');
const CategoryModel = require('../models/categoryModel.js');
const pagination = require('../util/pagination.js');

const router = Router();

//权限控制
router.use((req,res,next)=>{
	if(req.userInfo.isAdmin){
		next()
	}else{
		res.send('<h1>请用管理员账号登录</h1>');
	}
})

//显示文章管理页面
router.get("/",(req,res)=>{
	
	let options = {
		page: req.query.page,//需要显示的页码
		model:ArticleModel, //操作的数据模型
		query:{}, //查询条件
		projection:'-_v', //投影，
		sort:{_id:-1}, //排序
		populate:[{path:'category',select:"name"},{path:'user',select:'username'}]
	}

	pagination(options)
	.then((data)=>{
		res.render('admin/article-list',{
			userInfo:req.userInfo,
			articles:data.docs,
			page:data.page,
			list:data.list,
			pages:data.pages,
			url:'/article'
		});	
	})
	
	// res.render('admin/article-list',{
	// 	userInfo:req.userInfo,
	// 	url:'/category'
	// });
})

//显示新增页面
router.get("/add",(req,res)=>{
	CategoryModel.find({},'_id name')
	.sort({order:1})
	.then((categories)=>{
		res.render('admin/article-add-edit',{
			userInfo:req.userInfo,
			categories:categories
		});
	})
	
})
//处理添加请求
router.post("/add",(req,res)=>{
	let body = req.body;
	new ArticleModel({
		category:body.category,
		user:req.userInfo._id,
		title:body.title,
		intro:body.intro,
		content:body.content
	})
	.save()
	.then((newCate)=>{
		if(newCate){//新增成功,渲染成功页面
			res.render('admin/article-success',{
				userInfo:req.userInfo,
				message:'新增文章成功',
				url:'/article'
			})
		}
	})
	.catch((e)=>{//新增失败,渲染错误页面
 		res.render('admin/article-fail',{
			userInfo:req.userInfo,
			message:'新增文章失败'
		})
	})
})

router.get("/edit/:id",(req,res)=>{
	let id = req.params.id;
	
	CategoryModel.find({},'_id name')
	.sort({order:1})
	.then((categories)=>{
		ArticleModel.findById(id)
		.then((article)=>{
			res.render('admin/article-add-edit',{
				userInfo:req.userInfo,
				categories:categories,
				article:article
			});
		})
		.catch((e)=>{
			res.render('admin/article-fail',{
				userInfo:req.userInfo,
				message:'获取文章失败，文章不存在'
			})
		})
	})
})


router.post("/edit",(req,res)=>{
	let body = req.body;
	let options = {
		category:body.category,
		title:body.title,
		intro:body.intro,
		content:body.content
	}
	ArticleModel.update({_id:body.id},options,(err,raw)=>{
		if(!err){
			res.render('admin/article-success',{
				userInfo:req.userInfo,
				message:'编辑文章成功',
				url:'/article'
			})
		}else{
			res.render('admin/article-fail',{
				userInfo:req.userInfo,
				message:'编辑文章失败'
			})
		}
	})
	
})


router.get("/delete/:id",(req,res)=>{
	let id = req.params.id;
	ArticleModel.remove({_id:id},(err,raw)=>{
		if(!err){
			res.render('admin/article-success',{
				userInfo:req.userInfo,
				message:'删除文章成功',
				url:'/article'
			})
		}else{
			res.render('admin/article-fail',{
				userInfo:req.userInfo,
				message:'删除文章失败'
			})
		}
	})
})


module.exports = router;