(function () {
    
    'use restrict';

    var app = angular.module("app");
    app.controller('CreateMovieController', ['MovieService', function(MovieService) {

        this.movie = {};
        this.movie.id = MovieService.getNextMovieId();

        this.character = {};
        this.success = false;

        this.createMovie = function () {
            MovieService.createMovie(
                    {
                        id : this.movie.id,
                        name : this.movie.name,
                        description : this.movie.description,
                        director : this.movie.director,
                        releaseYear : this.movie.releaseYear,
                        rating : this.movie.rating,
                        language : this.movie.language
                    }
                );
            this.success = true;
        }

        this.addCharacter = function () {
            MovieService.addCharacter( this.movie.id ,{character : this.character.character, actor : this.character.actor});
        }

        this.getMovieCharacters = function () {
            return MovieService.getMovieCharacters(this.movie.id);
        }
    }]);
})();
