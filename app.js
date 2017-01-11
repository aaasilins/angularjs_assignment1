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
      var lengthOfArray = arrayToLength.length;
      return lengthOfArray;

    };

    $scope.feedBack = function(amountOfFood) {
      if (amountOfFood <= '3') {
        $scope.tellMe = "Enjoy";
      } else {
        $scope.tellMe = "Too much";
      }

    };


  }



})();
