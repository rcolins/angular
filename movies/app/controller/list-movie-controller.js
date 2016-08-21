(function () {
    
    'use restrict';

    var app = angular.module("app");
    app.controller('ListMovieController', ['MovieService', function(MovieService) {

        this.getAllMovies = function () {
           return MovieService.getAllMovies();
        }

        this.addMovie = function () {
            MovieService.addMovie();
        }
    }]);
})();
