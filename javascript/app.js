"use strict";

/**
 * Application
 */
var app = angular.module('moviesApp', []);

/**
 * Movies controller
 */
app.controller('MoviesCtrl', function($scope, $http) {

    $http.get('http://restarantino.herokuapp.com/movies').success(function(movies) {
        $scope.movies = movies;
    });

});