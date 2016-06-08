var index  =	angular.module('mainApp',['ngRoute']);
index.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'contents/maincontent.ejs'
	})
	.when('/about',{
		templateUrl:'../about/about.ejs'
	})
	.when('/tour',{
		templateUrl:'../tour/tour.ejs'
	})
	.when('/login',{
		templateUrl:'../login/index.ejs'
	})
	.otherwise({
		redirectTo:'/'
	});
});

