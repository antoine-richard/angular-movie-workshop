/* global moviesModule:false */
"use strict";

/**
 * Movie info sheet
 */
app.controller('MovieDetailCtrl', ['$scope', '$routeParams', 'moviesData', function($scope, $routeParams, moviesData) {
    moviesData.getMovie($routeParams.movieId).success(function(movie) {
        $scope.movie = movie;
    });
}]);