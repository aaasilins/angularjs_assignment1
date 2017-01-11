(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.name = "";

    $scope.splitString = function(stringToSplit) {
      var arrayOfStrings = stringToSplit.split(' ');
      return arrayOfStrings;
    };

    $scope.returnLength = function(arrayToLength) {
      if (arrayToLength == "") {
        return 0;
      } else {

      var lengthOfArray = arrayToLength.length;
      return lengthOfArray;
}
    };

    $scope.feedBack = function(amountOfFood) {
      if (amountOfFood == 0) {
        $scope.tellMe = "Please enter data first";
      }
       else if (amountOfFood <= '3') {
         $scope.tellMe = "Enjoy";
       }  else {
        $scope.tellMe = "Too much";
      }

    };


  }



})();
