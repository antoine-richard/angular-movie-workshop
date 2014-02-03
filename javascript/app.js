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
    .when('/?',		{ controller: '?', 		templateUrl: '?' })
    .otherwise(		{ redirectTo: '/?' });
});