/* global moviesModule:false */
"use strict";

/**
 * Movies list
 */
moviesModule.controller('MoviesCtrl', ['$scope', 'moviesData', function($scope, moviesData) {
    moviesData.getMovies().success(function(movies) {
        $scope.movies = movies;
    });
}]);