var express = require('express');
var router = express.Router();
var crypto = require('crypto-js');
var mongoose = require('mongoose')
var master = "encrpwd_";
var connectionString =require('../db/dbstring');
var ensureAdminAuthentication = require('../auth/adminauth');
//////////////////////MONGOOSE CONNECTION///////////////
var mcat = mongoose.model('maincat')
var scat = mongoose.model('subcat')
var account = mongoose.model('account')
//////////////////////////////////////////////////////////
function decrp(data){
	var bytes = crypto.AES.decrypt(data,master);
    return(bytes.toString(crypto.enc.Utf8));
}

////////////////////////////////////////////////////////
router.get('/',ensureAdminAuthentication,function(req,res,next){
		mcat.find(function(err,data){
			scat.find(function(err,data1){
		  		res.render('admin/index',{
		  				title:'category',
		  				data:data,
		  				subcat:data1,
		  				acc:req.session.acc
		  		})
			})
		})	
});

router.post('/add_cat',ensureAdminAuthentication,function(req,res,next){
	if(req.body.name.length<=0){
		res.redirect('/admin');
	}

	var new_scat =new scat({
		ref_id:req.body.main_cat_name,
		name:req.body.name
	});
	new_scat.save(function(err,save){
	      if(err){
	           res.redirect('/admin');
	      }
	      else{
	           res.redirect('/admin');
			}			
	})
})


router.get('/del/:id',ensureAdminAuthentication,function(req,res){

		{
			var id=req.params.id;
			scat.remove({_id: id}, function(err, result) {
            if (err) {
               console.log("error---"+err)
                
            }
            else{
              res.send('deleted');
                }
        	});	
		}
})

///////////////////////////////API///////////////////////////////

router.get('/sadmin',ensureAdminAuthentication,function(req,res){
	account.find(function(err,data){
		if(err){
			res.send("error"+err)
		}
		else{
			res.json(data);
		}
	})
})

router.get('/sadmin/:id/make_admin',ensureAdminAuthentication,function(req,res){
	account.update({"_id":req.params.id},{$set:{"admin":1}},function(err,result){
		if(err){
			res.send("error");
		}
		else{
			res.send("changed");
		}
	})
})

router.get('/sadmin/:id/get_user_data',ensureAdminAuthentication,function(req,res){
	account.find({"_id":req.params.id},function(err,result){
		if(err){
			res.send("error");
		}
		else{
			res.json(result)
		}
	})
})

router.get('/sadmin/:id/del_user',ensureAdminAuthentication,function(req,res){
	account.remove({"_id":req.params.id},function(err,result){
		if(err){
			res.send("error");
		}
		else{
			res.json("user deleted")
		}
	})
})

module.exports = router;
