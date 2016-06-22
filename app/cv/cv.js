'use strict';

angular.module('myApp.cv', ['ngRoute', 'ui.bootstrap.tabs', 'ui.bootstrap.popover'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cv', {
    templateUrl: 'cv/cv.html',
    controller: 'CvCtrl'
  });
}])

.controller('CvCtrl', ['$scope', function($scope) {
}]);