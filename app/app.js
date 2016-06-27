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
  'myApp.oss'
]).

config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/about'});
}]).

controller('AppController', ['$scope', '$location', 
  function($scope, $location){
    $scope.isCollapsed = true;
    $scope.$location = $location;

    // The cv sections only show if the showcv parameter is present
    $scope.employer = ($location.$$search.showcv === '1');
  }]);
