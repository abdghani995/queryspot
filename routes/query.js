var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var checkLogin = require('../auth/loginauth');
var postt = require('../db/postdb');

router.get('/',function(req,res,next){
	res.render('query/index',{
		acc:req.session.acc
	});
})

router.get('/top_queries',checkLogin,function(req,res,next){
	res.render('query/top_queries',{
		acc:req.session.acc
	});
})

router.post('/insert',checkLogin,function(req,res,next){
	var newpost = new postt({
		uid : req.body.currId,
		category : {
			main :req.body.main,
			sub : req.body.sub
		},
		head:req.body.head,
		content:req.body.content,
		tags:req.body.tag
	});
	newpost.save(function(err,save){
		if(err){
			console.log("error"+err);
		}
		else{
			res.json(save);
		}
	})
})
router.get('/submit',checkLogin,function(req,res,next){
	res.render('query/submit');
})
////////////////////	API		///////////////////

router.get('/get_all_posts',checkLogin,function(req,res,next){
	postt.find({},function(err,data){
		res.json(data)
	})
})


router.get('/get_all_posts/:id/userid',checkLogin,function(req,res,next){
	postt.find({"uid":req.params.id},function(err,data){
		res.json(data)
	})
})

router.get('/get_all_posts/:id/postid',checkLogin,function(req,res,next){
	postt.find({"_id":req.params.id},function(err,data){
		res.json(data)
	})
})



module.exports = router;