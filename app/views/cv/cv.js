'use strict';

angular.module('myApp.cv', ['ngRoute', 'ui.bootstrap.tabs', 'ui.bootstrap.popover', 'ui.bootstrap.modal'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cv', {
    templateUrl: 'views/cv/cv.html',
    controller: 'CvCtrl'
  });
}])

.controller('CvCtrl', ['$scope', '$sce', '$uibModal', function($scope, $sce, $uibModal) {
  
  function addTpl(job, index) {
    
    job.tpl = "jobPopoverTemplate.html";
    
    job.placement = 'right';
    if ( index%2 == 0 ) {
      job.placement = 'left';
    }
    
    return job;
  }

  // enable animations on modals
  $scope.animationsEnabled = true;
  
  $scope.openModal = function (company) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'teamModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: '',
      resolve: { 
        company: function(){
          return company;
        } 
      }
    });

  };

  // Always show the popovers, this is required by ui-bootstrap popovers
  $scope.showjobs = true;

  // Bind the content
  $scope.jobs = profile.jobs;
  $scope.jobs = $scope.jobs.map(addTpl);
  $scope.courses = profile.courses
  $scope.companies = profile.companies;

  //TODO:: show the time jobs with an animation, make the timeline fit the number of jobs
}])

.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, company) {

  $scope.company = company;

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  
});