'use strict';

angular.module('myApp.skills', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/skills', {
    templateUrl: 'skills/skills.html',
    controller: 'SkillsController'
  });
}])

.controller('SkillsController', ['$scope', function($scope) {
  // Get the skills values from the config file
  // Set the values, legend and colors of the progress bars
}]);