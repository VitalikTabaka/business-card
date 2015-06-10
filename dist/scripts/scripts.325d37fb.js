"use strict";angular.module("businessCardApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/gallery",{templateUrl:"views/gallery.html",controller:"GalleryCtrl"}).when("/contacts",{templateUrl:"views/contacts.html",controller:"ContactsCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("businessCardApp").controller("MainCtrl",["$scope","$http",function(a,b){b.get("http://localhost:9005/main").success(function(b){a.main=b})}]),angular.module("businessCardApp").controller("AboutCtrl",["$scope","$http",function(a,b){b.get("http://localhost:9005/about").success(function(b){a.about=b})}]),angular.module("businessCardApp").controller("GalleryCtrl",["$scope","$http",function(a,b){b.get("http://localhost:9005/gallery").success(function(b){a.posts=b})}]),angular.module("businessCardApp").controller("ContactsCtrl",["$scope","$http",function(a,b){b.get("http://localhost:9005/contacts").success(function(b){a.contacts=b})}]);