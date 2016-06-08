var mongoose =require('mongoose');
var api = new mongoose.Schema({
	  url: {
	    type:String,
	    required: true
	    },
	  description:{
	    type:String,
	    required: true
	    }
	},{collection:'api'});
module.exports = mongoose.model('api',api)