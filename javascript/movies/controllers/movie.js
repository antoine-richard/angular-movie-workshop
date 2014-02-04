/* global moviesModule:false */
"use strict";

/**
 * Movie info sheet
 */
moviesModule.controller('MovieDetailCtrl', function($scope, $routeParams, moviesData) {
    moviesData.getMovie($routeParams.movieId).success(function(movie) {
        $scope.movie = movie;
    });
});