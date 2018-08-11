const Router=require('express').Router;
const Mongoose=require('mongoose');
const CategoryModel = require('../models/categoryModel.js');
const ArticleModel = require('../models/article.js');
const pagination = require('../util/pagination.js');
const getCommonData = require('../util/getCommonData.js');
const router=Router();

router.get('/',(req,res)=>{
	ArticleModel.getPaginationArticles(req)
	.then(pageData=>{
		getCommonData()
		.then(data=>{
			res.render('main/index',{
				userInfo:req.userInfo,
				articles:pageData.docs,
				page:pageData.page,
				list:pageData.list,
				pages:pageData.pages,
				categories:data.categories,
				topArticles:data.topArticles,
				url:'/articles'
			});				
		})
	})	
});

//ajax请求获取文章列表的分页数据
router.get("/articles",(req,res)=>{
	let category = req.query.category;
	let query = {};
	if(category){
		query.category = category;
	}
	ArticleModel.getPaginationArticles(req,query)
	.then((data)=>{
		res.json({
			code:'0',
			data:data
		})
	})
});


//显示详情页面
router.get('/view/:id',(req,res)=>{
	let id = req.params.id;
	ArticleModel.findByIdAndUpdate(id,{$inc:{click:1}},{new:true})
	.populate('category','name')
	.then(article=>{
		getCommonData()
		.then(data=>{
			res.render('main/detail',{
				userInfo:req.userInfo,
				article:article,
				categories:data.categories,
				topArticles:data.topArticles,
				category:article.category._id.toString()
			})			
		})
	})
})


//显示列表页面
router.get('/list/:id',(req,res)=>{
	let id = req.params.id;
	ArticleModel.getPaginationArticles(req,{category:id})
	.then(pageData=>{
		getCommonData()
		.then(data=>{
			res.render('main/list',{
				userInfo:req.userInfo,
				articles:pageData.docs,
				page:pageData.page,
				list:pageData.list,
				pages:pageData.pages,
				categories:data.categories,
				topArticles:data.topArticles,
				category:id.toString(),
				url:'/articles'
			});				
		})
	})
})
module.exports = router;



