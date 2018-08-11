const Router=require('express').Router;
const router=Router();
const UserModel = require('../models/userModle.js');
const hmac = require('../util/hmac.js')
const CommentModel = require('../models/comment.js')

//添加评论
router.post('/add',(req,res)=>{
	let body = req.body;
	new	CommentModel({
		article:body.article,
		user:req.userInfo._id,
		content:body.content
	})
	.save()
	.then(comment=>{
		res.json({
			code:0,
			data:comment
		})
	})
})


module.exports = router;







