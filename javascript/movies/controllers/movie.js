/* global moviesModule:false */
"use strict";

/**
 * Movie info sheet
 */
moviesModule.controller('MovieDetailCtrl', function($scope, $http, $routeParams) {
    $http.get('http://restarantino.herokuapp.com/movies/'+$routeParams.movieId).success(function(movie) {
        $scope.movie = movie;
    });
});