"use strict";

/**
 * Application
 */
var app = angular.module('moviesApp', ['moviesModule', 'ngRoute']);

/**
 * Routes
 */
app.config(function($routeProvider) {
    $routeProvider
    .when('/movies',                    { controller: 'MoviesCtrl',         templateUrl: 'partials/movies.html' })
    .otherwise(                         { redirectTo: '/movies' });
});