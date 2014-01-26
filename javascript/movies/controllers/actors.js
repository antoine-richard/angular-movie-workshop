/* global moviesModule:false */
"use strict";

/**
 * Movie's actors
 */
app.controller('MovieActorsCtrl', ['$scope', '$routeParams', 'moviesData', function($scope, $routeParams, moviesData) {

    moviesData.getMovie($routeParams.movieId).success(function(movie) {
        $scope.movie = movie;
    });
    
    moviesData.getActors($routeParams.movieId).success(function(actors) {
        $scope.actors = actors;
    });

    $scope.photoOffset = function(actorId) {
        return {
            'background-position': '0 -'+(actorId * 48)+'px'
        };
    };
}]);
