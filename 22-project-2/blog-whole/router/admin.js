const Router=require('express').Router;
const router=Router();
const UserModel = require('../models/userModle.js');
const pagination = require('../util/pagination.js')
var multer  = require('multer')
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

module.exports = router;
