(function (){
'use strict';

angular.module('NameCalculator', [])

.controller('NameCalculatorController', function($scope) {
  $scope.name = "";
  $scope.totalVal = 0;

  $scope.displayNumeric = function ()
  {
    var totalNameValue = calculateNameString($scope.name);
    $scope.totalVal = totalNameValue;
  };

  function calculateNameString(string){
    var totalStringValue = 0;
    for(var i=0 ; i < string.length; i++)
    {
      totalStringValue += string.charCodeAt(i);
    }

    return totalStringValue;
  }

});

})();
