'use strict';

angular.module('myApp.recomendation.recomendation-directive', [])

.directive('recomendation', [function() {
  return function(scope, elm, attrs) {
    restrict: 'E',
    templateUrl: 'view2/view2.html',
    controller: []
  };
}]);
