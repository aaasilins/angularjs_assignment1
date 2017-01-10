(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.name = "Test";

    $scope.splitString = function(stringToSplit) {
      var arrayOfStrings = stringToSplit.split(' ');
      return arrayOfStrings;
    };

    $scope.returnLength = function(arrayToLength) {
      var lengthOfArray = arrayToLength.length;
      return lengthOfArray;

    };

    $scope.feedBack = function(amountOfFood) {
      var tellMe = " ";
      if (amountOfFood <= '3') {
        tellMe = "Enjoy";
      } else {
        tellMe = "Too much";
      }
      return tellMe;

    };


  }



})();
