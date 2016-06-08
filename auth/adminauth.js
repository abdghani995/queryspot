
////////////////ENSURE ADMIN AUTHENTICATION///////////////////
module.exports = function ensureAdminAuthentication(req,res,next){
	if(typeof (req.session.acc)!== 'undefined' && req.session.acc.admin==1){
		next();
	}
	else{
		res.redirect('/');
	}
}
