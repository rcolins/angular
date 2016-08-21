(function(){
    'use restrict'
    var app = angular.module("app",['ui.router']);

    app.config(function($stateProvider){

        $stateProvider.state('index',
            {
                url:'/',
                templateUrl:'app/components/view-all-movies.html',
                controller:'ListMovieController as listMovieController'
            }
        ).state('createMovie',
            {
                url:'/createMovie',
                templateUrl:'app/components/create-movie.html',
                controller:'CreateMovieController as createMovieController'
            }
        ).state('viewMovie',
            {
                url:'/viewMovie/:movieId',
                templateUrl:'app/components/view-movie.html',
                controller:'ViewMovieController as viewMovieController'
            }
        );
    });

    app.controller('ApplicationController',['$state' , function ($state) {
        $state.go('index');
    }]);

    //configure directive
    app.directive('movieRating', function () {
        return {
            scope: {
                rating: '@'
            },
            templateUrl : 'app/components/directive/movie-rating.html',
            link: function($scope, $element){
                $scope.ratingsArr = [];
                for(var x = 0 ; x < $scope.rating ; x++){
                    $scope.ratingsArr.push(x);
                }
            }
        };
    })

})();
