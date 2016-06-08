var express = require('express');
var router = express.Router();
var checkLogin = require('../auth/loginauth');
//////////////////////////////////////////////////

/* GET home page. */
router.get('/main', function(req, res, next) {
    if(typeof (req.session.acc)!== 'undefined')
        var account=req.session.acc;
        res.render('mains/index', {
        title: 'Express',
        acc: account
    });
});

router.get('/', function(req, res, next) {
    if(typeof (req.session.acc)!== 'undefined')
        var account=req.session.acc;
        res.render('mains/index', {
        title: 'Express',
        acc: account
    });
});



//Accounts page
router.get('/account',checkLogin,function(req,res,next){
    var acc=req.session.acc;
    res.render('account/index',{
        title : 'ACCOUNT',
        acc : acc
    });
});

//LOGOUT
router.get('/logout',checkLogin,function(req,res,next){
    req.session.destroy();
    res.redirect('/')
})


router.get('/getCurrentId',checkLogin, function(req, res, next) {
    if(typeof (req.session.acc)!== 'undefined')
        var account=req.session.acc;
        res.json(account)
});


module.exports = router;
