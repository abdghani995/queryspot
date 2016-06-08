var mongoose =require('mongoose');
var tags = new mongoose.Schema({
	  uid : {
	    type:Number,
	    required: true
	 	},
	  name: {
	    type:String,
	    required: true
	    },
	  count:{
	    type:String,
	    required: true
	    }
	},{collection:'account'});
module.exports = mongoose.model('account',account);