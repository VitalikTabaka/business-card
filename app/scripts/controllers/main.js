'use strict';

/**
 * @ngdoc function
 * @name businessCardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the businessCardApp
 */
angular.module('businessCardApp')
  .controller('MainCtrl', function ($scope, $http) {
        $http.get('http://localhost:9005/main').success(function(data) {
            $scope.main = data;
        });
  });
