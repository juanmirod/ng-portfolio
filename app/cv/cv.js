'use strict';

angular.module('myApp.cv', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cv', {
    templateUrl: 'cv/cv.html',
    controller: 'CvCtrl'
  });
}])

.controller('CvCtrl', [function() {

}]);