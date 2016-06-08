var mongoose =require('mongoose');
var account = new mongoose.Schema({
	  name : {
	    type:String,
	    required: true
	    },
	  email: {
	    type:String,
	    required: true
	    },
	  password:{
	    type:String,
	    required: true
	    },
	   admin:{
	   	type:Number,
	   	default:0
	   },
	   created_at: {
	   	type: Date, 
	   	default: Date.now
	   }
	},{collection:'account'});

module.exports = mongoose.model('account',account);