/* global moviesModule:false */
"use strict";

/**
 * Movies list
 */
app.controller('MoviesCtrl', ['$scope', 'moviesData', function($scope, moviesData) {
    moviesData.getMovies().success(function(movies) {
        $scope.movies = movies;
    });
}]);