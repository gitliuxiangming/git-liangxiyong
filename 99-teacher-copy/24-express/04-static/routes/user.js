/*
* @Author: TomChen
* @Date:   2018-08-03 17:10:35
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-03 17:25:13
*/
const Router = require('express').Router;

const router = Router();

router.get("/",(req,res)=>{
	res.send('get user data');
})
router.post("/",(req,res)=>{
	res.send('add user data');
})
router.put("/",(req,res)=>{
	res.send('edit user data');
})
router.delete("/:id",(req,res)=>{
	console.log(req.params.id);
	res.send('delete user data');
})

module.exports = router;
