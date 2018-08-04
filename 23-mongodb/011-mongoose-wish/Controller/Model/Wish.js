const mongoose = require('mongoose');

let WishSchema = new mongoose.Schema({
  content:{
  	type:String,
  	default:'许愿墙'
  },
  color:{
  	type:String,
  	default:'rgba(255,126,126,0.5)'
  }
});
  
const WishModel = mongoose.model('wish', WishSchema);

module.exports = WishModel;