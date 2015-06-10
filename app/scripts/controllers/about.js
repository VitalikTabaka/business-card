'use strict';

/**
 * @ngdoc function
 * @name businessCardApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the businessCardApp
 */
angular.module('businessCardApp')
    .controller('AboutCtrl', function($scope, $http) {
        $http.get('http://localhost:9005/about').success(function(data) {
            $scope.about = data;
        });

    });
