var myNinjaApp = angular.module('myNinjaApp', []);
myNinjaApp.controller('NinjaController', function($scope){
  $scope.message = "Hey y'all";
  $scope.ninjas = ['Midhat', 'Sarp', 'Hassan', 'Shadi', 'Boban'];

});
