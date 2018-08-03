const Router = require('express').Router;

const router = Router();

router.get("/",(req,res)=>{
	res.send('get blog data');
})
router.post("/",(req,res)=>{
	res.send('add blog data');
})
router.put("/",(req,res)=>{
	res.send('edit blog data');
})
router.delete("/",(req,res)=>{
	res.send('delete blog data');
})

module.exports = router;