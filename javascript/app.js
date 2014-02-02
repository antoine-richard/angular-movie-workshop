"use strict";

/**
 * Application
 */
var app = angular.module('moviesApp', []);

/**
 * Movies controller
 */
app.controller('MoviesCtrl', function($scope) {
    $scope.movies = [
        { title: "Reservoir Dogs", year: 1992 },
        { title: "Pulp Fiction",   year: 1994 },
        { title: "Jackie Brown",   year: 1997 }
    ];
});