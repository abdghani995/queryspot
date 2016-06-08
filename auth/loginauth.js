///////////////////LOGIN AUTHORIZATION///////////////////

module.exports = function checkLogin(req,res,next){
    if(typeof (req.session.acc)!== 'undefined'){
        next();
    }
    else{
        res.redirect('/login');
    }
}