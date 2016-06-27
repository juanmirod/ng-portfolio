'use strict';

angular.module('myApp.oss', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/oss', {
    templateUrl: 'contributions/oss.html',
    controller: 'OssCtrl'
  });
}])

.controller('OssCtrl', ['$scope', function($scope) {  

}]);