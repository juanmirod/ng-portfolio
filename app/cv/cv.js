'use strict';

angular.module('myApp.cv', ['ngRoute', 'ui.bootstrap.tabs', 'ui.bootstrap.popover'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cv', {
    templateUrl: 'cv/cv.html',
    controller: 'CvCtrl'
  });
}])

.controller('CvCtrl', ['$scope', '$sce', function($scope, $sce) {
  function addPlacement(job, index) {
    
    job.tpl = "jobPopoverTemplate.html";
    job.placement = 'right';
    if ( index%2 == 0 ) {
      job.placement = 'left';
    }
    
    return job;
  }

  $scope.jobs = profile.jobs;
  $scope.jobs = $scope.jobs.map(addPlacement);
}]);