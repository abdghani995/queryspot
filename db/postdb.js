var mongoose =require('mongoose');
var post = new mongoose.Schema({
	  uid : {
	    type:String,
	    required: true
	 	},
	  category:{
	  	main:{
	  		type:String,
	    	required: true
	  	},
	  	sub:{
	  		type:String,
	    	required: true
	  	}
	  },
	  head: {
	    type:String,
	    required: true
	    },
	  content:{
	    type:String,
	    required: true
	    },
	   tags:{
	   	type:String,
	   	default:''
	   },
	   created_at: {
	   	type: Date, 
	   	default: Date.now
	   }
	},{collection:'post'});
module.exports = mongoose.model('post',post)