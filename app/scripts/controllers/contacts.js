'use strict';

/**
 * @ngdoc function
 * @name businessCardApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the businessCardApp
 */
angular.module('businessCardApp')
    .controller('ContactsCtrl', function($scope, $http) {
        $http.get('http://localhost:9005/contacts').success(function(data) {
            $scope.contacts = data;
        });
    });
