'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap.collapse',
  'ui.bootstrap.tpls',
  'ui.bootstrap.alert',
  'myApp.about',
  'myApp.cv',
  'myApp.skills',
  'myApp.oss',
  'LocalStorageModule'
]).

config(['$locationProvider', '$routeProvider', 'localStorageServiceProvider',
  function($locationProvider, $routeProvider, localStorageServiceProvider) {
    
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/about'});

    localStorageServiceProvider
      .setPrefix('juanmirodPortfolio');
  }]).

controller('AppController', ['$scope', '$location', 'localStorageService', 
  function($scope, $location, localStorageService){
    
    $scope.isCollapsed = true;
    $scope.showCookieAlert = true;
    $scope.$location = $location;

    $scope.disableCookies = function(){
      localStorageService.clearAll();
      $scope.showCookieAlert = false;
    }

    // Every time the user changes the view, we must collapse the menu
    $scope.$on('$routeChangeStart', function(){
      $scope.isCollapsed = true;
    });

    // The cv sections only show if the showcv parameter is present, we store the preference in localStorage
    // if this user returns typing the address he will find all the sections.
    if (localStorageService.get('showcv') || $location.$$search.showcv === '1') {
    
      localStorageService.set('showcv', true);
      $scope.employer = true;
    
    } else {
    
      $scope.employer = false;
    
    }

  }]);
