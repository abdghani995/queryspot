var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var crypto = require('crypto-js');
var master = "encrpwd_";
var account = require('../db/accountdb');

//////////////////////ENCRYPTION //////////////////////
function encrp(data){
	return crypto.AES.encrypt(data,master);
}

function decrp(data){
	var bytes = crypto.AES.decrypt(data,master);
    return(bytes.toString(crypto.enc.Utf8));
}



//////////////////LOGIN BEGINS /////////////////////////
//main login page
router.get('/',function(req,res,next){
    if(typeof req.session.acc === 'undefined') {
        res.render('login/index', {title: 'LOGIN'});
    }
    else{
        res.redirect('/account');
    }
});

/////////////////registration page//////////////////////
router.post('/reg',function(req,res,next){
    var name=req.body.name.trim();
    var email= req.body.email.trim();
    var password= req.body.password;
    var validate;
	if(name.length<3){
			   res.render('login/index', {
	           title: 'LOGIN',
	           stat : 5
	       })
	}
	else if(password.length<6){
		 	   res.render('login/index', {
	           title: 'LOGIN',
	           stat : 4
	           })
	}else{
		account.find({email:email},function(err,data){
			if(data.length>0){
				 validate=1;
				 res.render('login/index', {
	             title: 'LOGIN',
	             stat : 7
	         });
			}
		});

		if(typeof(validate)==='undefined'){
	    var website = new account({
	       name:name,
	       email : email,
	       password : encrp(password)
	    });
	    website.save(function(err,save){
	      if(err){
	           res.render('login/index', {
	           title: 'LOGIN',
	           stat : 3
	         });
	      }
	      else{
	            res.render('login/index', {
	            title: 'LOGIN',
	            stat : 1
	      });
	      }
	    })
	  }
	  else{
	  		 res.render('login/index', {
	             title: 'LOGIN',
	             stat : 7
	         });
	  }
	}
})


/////////////////login authorization/////////////
router.post('/auth',function(req,res,next){
	var email= req.body.email.trim();
    var password= req.body.password;

    account.findOne({email:email},function(err,data){
    	if(data.length<=0){
    			res.render('login/index', {
	             title: 'LOGIN',
	             stat : 21
	         });
    		
    	}
    	else{
    		var pwd=(decrp(data.password));
    		if(pwd===password){
    			req.session.acc=data;
    			res.redirect('/');
    		}
    		else{

    				res.render('login/index', {
			             title: 'LOGIN',
			             stat : 21
			         });

    		}
    	}
    })

})
module.exports = router;
