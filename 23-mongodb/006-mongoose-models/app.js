const mongoose = require('mongoose');

UserModel = require('./models/user.js');

mongoose.connect('mongodb://localhost:27017/message', { useNewUrlParser: true });

let getRandom = (max,min)=>{
	return Math.round(min+(max-min)*Math.random());
}

let NameArray = ['alay','bob','cooqi','daiv','elix','fire','grand','hello','index','jack','liu','mongd','nacy']
function getName() {
	return NameArray[getRandom(0,NameArray.length-1)];
}

function getAge(a,b){
	return getRandom(a,b);
}
// function getSex(a,b){
// 	return getRandom(a,b);
// }
const sexArr = ['male','female'];
function getSex(){
	return sexArr[getRandom(0,sexArr.length-1)];
}
let arr = [];
for(var i=0;i < 15;i++){
	arr.push({name:getName(),age:getAge(10,100),sex:getSex('male','female')});
}

const db = mongoose.connection;
	
db.on('error',(err)=>{
	throw err;
});

db.once('open',()=>{
	
	UserModel.insertMany(arr,(err,docs)=>{
		if(!err){
			console.log(docs);
		}else{
			console.log('insertMany err::',err);
		}
	});
});
