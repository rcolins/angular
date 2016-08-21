(function(){

    'use restrict';
    var app = angular.module("app");

    app.service('MovieService', function () {

        var  movies = {};

        this.getAllMovies = function () {
            return Object.keys(movies).map(function(k){return movies[k]});
        }

        this.getMovie = function (movieId) {
            return movies[movieId];
        }

        this.createMovie = function (movie) {
            movies[movie.id] = movie;
        }

        this.getNextMovieId = function () {
            return Object.keys(movies).length + 1;
        }

        this.addCharacter = function(movieId, character){
            var movie = movies[movieId];
            if(movie.characters == undefined){
                movie.characters = [];
            }
            movie.characters.push(character);
        }

        this.getMovieCharacters = function(movieId){
            if(movies[movieId] != undefined){
                return movies[movieId].characters;
            }
           return [];
        }
    })
})();
