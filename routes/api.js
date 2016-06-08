var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var apiDb = require('../db/apidb');
var ensureAdminAuthentication = require('../auth/adminauth');
var checkLogin = require('../auth/loginauth');

router.get("/",ensureAdminAuthentication,function(req,res,next){

	res.render('api/index.ejs',{
		acc:req.session.acc
	});
})

router.get("/getAll",ensureAdminAuthentication,checkLogin,function(req,res,next){
	apiDb.find(function(err,data){
		res.json(data);
	})
})

router.post("/getAll",ensureAdminAuthentication,checkLogin,function(req,res,next){
	var new_api = new apiDb({
		url:req.body.apiU,
		description:req.body.apiD
	});
	new_api.save(function(err,data){
		if(err){
			console.log(err);
		}
		else{
			res.json(data);
		}
	}); 
})

router.delete("/getAll/:id",ensureAdminAuthentication,function(req,res,next){
	apiDb.remove({_id:req.params.id},function(err,data){
		if(err){
			console.log(err);
		}
		else{
			res.json(data);
		}
	})
})

module.exports = router;