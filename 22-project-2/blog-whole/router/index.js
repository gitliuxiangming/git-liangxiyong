const Router=require('express').Router;
const router=Router();

router.get('/',(req,res)=>{
	res.render('main/index',{
		userInfo:req.userInfo
	});
});

module.exports = router;



