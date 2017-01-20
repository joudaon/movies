'use strict';

angular.module ('moviesApp')

	//Insert Movie Controller - insert.html
	.controller ('InsertController', ['$scope', 'insertmovieFactory', function($scope, insertmovieFactory){
		//Insert the movie in the db.json file
		$scope.addMovie = function(){
			console.log($scope.movie);
			insertmovieFactory.saveMovie().save({id:$scope.movie.id}, $scope.movie);
		}
					
	}])
	
	.controller ('VideoGalleryController', ['$scope', 'videogalleryFactory', function($scope, videogalleryFactory){		
		//Get dishes from db_movies.json
		videogalleryFactory.getMovies().query(
                function(response) {
                    $scope.movies = response;
                    //$scope.showMenu = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                });					
	}])
	
;