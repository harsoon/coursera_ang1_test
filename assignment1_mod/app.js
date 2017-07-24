(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchController);
LunchController.$inject = ['$scope'];
function LunchController($scope) {
  $scope.lunchMessage="";
  $scope.lunchList="";

  $scope.checkLunch = function () {
    if ($scope.lunchList.length==0)
      $scope.lunchMessage = "Please enter data first";
    else if ($scope.lunchList.split(",").length<=3)
      $scope.lunchMessage = "Enjoy!";
    else
      $scope.lunchMessage = "Too much!";    
  };
}

})();
