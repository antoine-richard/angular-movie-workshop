/* global moviesModule:false */
"use strict";

/**
 * Movies list
 */
moviesModule.controller('MoviesCtrl', function($scope, moviesData) {
    moviesData.getMovies().success(function(movies) {
        $scope.movies = movies;
    });
});