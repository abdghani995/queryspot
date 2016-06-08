angular.module("textAngularTest", ['textAngular']);

	function wysiwygeditor($scope,$http,$location,$window) {
	  $scope.orightml = '';
	  $scope.htmlcontent = $scope.orightml;
	  $scope.disabled = false;

	 //cateogry logic
    $scope.scat_display=false

    $scope.renderMcat	=	function(response){
		$scope.mcats=response;
	}

	$scope.renderScat	=	function(response){
		$scope.scat_display=true
		$scope.scats=response;
	}

	$scope.setMainCat = function(){
		$http.get("/category/mcat")
		.success($scope.renderMcat);
	}

	$scope.setMainCat();

	$scope.scat = function(){
		var mainCatId=$scope.item;
		$http.get("/category/mcat/"+mainCatId)
		.success($scope.renderScat);
	}
	//\cateogry logic

	$scope.submitf	=	function(response){
		$http.get("/getCurrentId")
		.success(function(response){
			var post = {
				currId:response._id,
				head : $scope.head,
				content : $scope.htmlcontent,
				tag : $scope.testInput,
				main : $scope.item,
				sub : $scope.sitem,
			}
			alert($scope.testInput);
			/*$http.post("/query/insert",post)
				.success(function(response){
					$window.location.href = '/query/submit';
					
				})*/
		});

		
		
	}


	};