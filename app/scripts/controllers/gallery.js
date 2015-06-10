'use strict';

/**
 * @ngdoc function
 * @name businessCardApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the businessCardApp
 */
angular.module('businessCardApp')
    .controller('GalleryCtrl', function($scope, $http) {
    	$http.get('http://localhost:9005/gallery').success(function(data) {
    		$scope.posts = data;
    	});
    });
