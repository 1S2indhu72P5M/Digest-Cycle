(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope', '$timeout'];
function CounterController($scope, $timeout) {
  $scope.counter = 0;

  $scope.upCounter = function () {
    setTimeout(function () {
        $scope.counter++;
        consonle.log("Counter Incremented!");
    }, 2000);
  };
}
})();
