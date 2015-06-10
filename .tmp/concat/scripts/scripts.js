'use strict';

/**
 * @ngdoc overview
 * @name businessCardApp
 * @description
 * # businessCardApp
 *
 * Main module of the application.
 */
angular
  .module('businessCardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name businessCardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the businessCardApp
 */
angular.module('businessCardApp')
  .controller('MainCtrl', ["$scope", "$http", function ($scope, $http) {
        $http.get('http://localhost:9005/main').success(function(data) {
            $scope.main = data;
        });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name businessCardApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the businessCardApp
 */
angular.module('businessCardApp')
    .controller('AboutCtrl', ["$scope", "$http", function($scope, $http) {
        $http.get('http://localhost:9005/about').success(function(data) {
            $scope.about = data;
        });

    }]);

'use strict';

/**
 * @ngdoc function
 * @name businessCardApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the businessCardApp
 */
angular.module('businessCardApp')
    .controller('GalleryCtrl', ["$scope", "$http", function($scope, $http) {
    	$http.get('http://localhost:9005/gallery').success(function(data) {
    		$scope.posts = data;
    	});
    }]);

'use strict';

/**
 * @ngdoc function
 * @name businessCardApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the businessCardApp
 */
angular.module('businessCardApp')
    .controller('ContactsCtrl', ["$scope", "$http", function($scope, $http) {
        $http.get('http://localhost:9005/contacts').success(function(data) {
            $scope.contacts = data;
        });
    }]);
