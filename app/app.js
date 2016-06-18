'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap.collapse',
  'ui.bootstrap.tpls',
  'myApp.about',
  'myApp.cv',
  'myApp.skills',
  'myApp.version'
]).

config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/about'});
}]).

controller('AppController', ['$scope', '$location', function($scope, $location){
  $scope.isCollapsed = true;
  $scope.$location = $location;
}]);
