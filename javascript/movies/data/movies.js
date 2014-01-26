/* global app:false */
"use strict";

/**
 * Movies data gateway
 */
app.factory('moviesData', function($http) {
    
    var baseUrl = 'http://restarantino.herokuapp.com/';

    return {
        getMovies: function() {
            return $http.get(baseUrl+'movies');
        },
        getMovie: function(id) {
            return $http.get(baseUrl+'movies/'+id);
        },
        getActors: function(id) {
            return $http.get(baseUrl+'movies/'+id+'/actors');
        }
    };

});