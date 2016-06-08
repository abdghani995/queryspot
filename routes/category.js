var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var dat;

////////////////SCHEMAS////////////////////////////
var mcat = require('../db/mcatdb');
var scat = require('../db/scatdb');
var postt = require('../db/postdb');
/////////////////////////////////////////////

router.get('/',function(req,res,next){
	   if(typeof (req.session.acc)!== 'undefined')
       var account=req.session.acc;
		mcat.find(function(err,data){
			scat.find(function(err,data1){
		  		res.render('mains/category',{
		  				title:'category',
		  				data:data,
		  				subcat:data1,
		  				acc:account
		  		})
			})
		})	
})




/////////////////////////////API////////////////////////
router.get('/post/:name',function(req,res){
	res.render('mains/posts',{
		content:req.params.name
	})
})

router.get('/mcat',function(req,res,next){
	mcat.find(function(err,data){
		res.json(data);
	})
})

router.get('/mcat/:id',function(req,res,next){
	scat.find({'ref_id':req.params.id},function(err,data){
		res.json(data);
	})
})

router.get('/scat',function(req,res,next){
	scat.find(function(err,data){
		res.json(data);
	})
})
router.get('/scat/name',function(req,res,next){
	scat.find({},{"name":1,"_id":0},function(err,data){
		res.json(data);
	})
})


router.get('/:id/mcat',function(req,res,next){
	postt.find({"category.main":req.params.id},function(err,data){
		if(err){
			res.send('error retrieving data or incorrect info');
		}
		else{
			res.json(data);
		}
	})
})

router.get('/:id/scat',function(req,res,next){
	postt.find({"category.sub":req.params.id},function(err,data){
		if(err){
			res.send('error retrieving data or incorrect info');
		}
		else{
			res.json(data);
		}
	})
})

module.exports = router;