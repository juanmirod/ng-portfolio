'use strict';

angular.module('myApp.cv', ['ngRoute', 'ui.bootstrap.tabs', 'ui.bootstrap.popover'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cv', {
    templateUrl: 'cv/cv.html',
    controller: 'CvCtrl'
  });
}])

.controller('CvCtrl', ['$scope', '$sce', function($scope, $sce) {
  $scope.livingindie = $sce.trustAsHtml("<p><small>sept 2015 - feb 2016</small></p><p>Development of a single page app using AngularJS.</p><p>Development of several micro sites for streaming live events.</p>");
}]);