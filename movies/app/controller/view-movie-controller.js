(function () {
    
    'use restrict';

    var app = angular.module("app");

    app.controller('ViewMovieController', ['MovieService','$stateParams', function(MovieService,$stateParams) {
        this.movie = MovieService.getMovie($stateParams.movieId);
    }]);
})();
