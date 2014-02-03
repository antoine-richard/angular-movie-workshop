/* global moviesModule:false */
"use strict";

/**
 * Movie's actors
 */
moviesModule.controller('MovieActorsCtrl', function($scope, $http, $routeParams) {

    $http.get('http://restarantino.herokuapp.com/movies/'+$routeParams.movieId).success(function(movie) {
        $scope.movie = movie;
    });
    
    $http.get('http://restarantino.herokuapp.com/movies/'+$routeParams.movieId+'/actors').success(function(actors) {
        $scope.actors = actors;
    });

});