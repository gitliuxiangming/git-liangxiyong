const Router=require('express').Router;
const Mongoose=require('mongoose');
const CategoryModel = require('../models/categoryModel.js');
const ArticleModel = require('../models/article.js');
const pagination = require('../util/pagination.js');
const router=Router();

router.get('/',(req,res)=>{
	// CategoryModel.find({},'_id name').then((category)=>{
	// 	res.render('main/layout',{
	// 		category:category
	// 	})
	// })
	CategoryModel.find({},'_id name')
	.sort({order:1})
	.then((category)=>{//获取分类
		/*
		let options = {
			page: req.query.page,//需要显示的页码
			model:ArticleModel, //操作的数据模型
			query:{}, //查询条件
			projection:'-_v', //投影，
			sort:{_id:-1}, //排序
			populate:[{path:'category',select:"name"},{path:'user',select:'username'}]
		}
		*/
		ArticleModel.getPaginationArticle(req)
		.then((topArticles)=>{//获取首页的文章
			ArticleModel.find({},'_id title click')
			.sort({click:-1})
			.limit(10)
			res.render('main/index',{
				userInfo:req.userInfo,
				articles:topArticles.docs,
				page:topArticles.page,
				list:topArticles.list,
				pages:topArticles.pages,
				topArticles:topArticles,
				category:category,
				url:'/articles',
			});	
		})
	})
});

//ajax请求获取文章列表的分页数据
router.get("/articles",(req,res)=>{
	ArticleModel.getPaginationArticle(req)
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







})
module.exports = router;



