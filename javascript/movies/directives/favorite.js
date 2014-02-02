/* global moviesModule:false */
"use strict";

/**
 * Favorite widget
 */
moviesModule.directive('mvFavorite', function($window) {
    return {
        restrict: 'EA',
        template: '<span class="star" ng-click="toggle()"></span>',
        replace: true,
        scope: {
            id: '='
        },
        link: function(scope, element, attributes) {
            scope.$watch('id', function(id) {
                var storedValue = ($window.localStorage['movie#'+id] === 'true');
                storedValue ? element.addClass('filled') : element.removeClass('filled');
            });
            scope.toggle = function() {
                var newValue = !($window.localStorage['movie#'+scope.id] === 'true');
                $window.localStorage['movie#'+scope.id] = newValue;
                newValue ? element.addClass('filled') : element.removeClass('filled');
            };
        }
    };
});