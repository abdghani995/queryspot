var app = angular.module('api_angular',[]);

app.controller('api_controller',function($scope,$http){

		$scope.renderApi	=	function(response){
		$scope.apis=response;
		}
		$scope.setApi = function(){
		$http.get("/api/getAll")
		.success($scope.renderApi);
		}

		$scope.setApi();

		$scope.add_api = function (){
			var apidata = {
				apiU : $scope.apiUrl,
				apiD : $scope.apiDesc
			}
			$http.post('/api/getAll',apidata)
			.success(function(response){
						$scope.apiUrl=null
						$scope.apiDesc=null
						$scope.setApi();
				
			})
		}

		$scope.delete = function(id){
			
			$http.delete('/api/getAll/'+id)
			.success(function(response){
					$scope.setApi();
			})
		}
})