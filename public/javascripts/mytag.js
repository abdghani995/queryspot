	
	
	$(function($http) {
				var items = [];
				$http.get("/category/scat")
				  .success(function(response){
                            $(response).each(function(chave,value){
                            items.push(value.name.toLowerCase());
           					items.push(value.name.toUpperCase());
                            });

						});
				 $http.get("/category/mcat")
				  .success(function(response){
                            $(response).each(function(chave,value){
                            items.push(value.name.toLowerCase());
           					items.push(value.name.toUpperCase());
                            });

						});

			$("#testInput")
					.tags({
						requireData : true,
						unique:true
					})
					.autofill({
						data: items
					})	
			});