'use strict';

angular.module('myApp.oss', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/oss', {
    templateUrl: 'views/contributions/oss.html',
    controller: 'OssCtrl'
  });
}])

.controller('OssCtrl', ['$scope', function($scope) {  
  
}])

.directive('highlight', function() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      console.log(element);
      hljs.highlightBlock(element[0]);
    }
  }
});
