/* global moviesModule:false */
"use strict";

/**
 * Movies list
 */
moviesModule.controller('MoviesCtrl', function($scope, $http) {
    $http.get('http://restarantino.herokuapp.com/movies').success(function(movies) {
        $scope.movies = movies;
    });
});