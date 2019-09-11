var myNinjaApp = angular.module('myNinjaApp', []);
myNinjaApp.controller('NinjaController', function($scope){

  $scope.ninjas=[
    {
      name:"Midhat",
      belt:"green",
      rate: 50
    },

    {
      name:"Shadi",
      belt:"black",
      rate: 30
    },

    {
      name:"Hassan",
      belt:"Orange",
      rate: 1000
    },

    {
      name:"Munira",
      belt:"Brown",
      rate: 40
    },

    {
      name:"Boban",
      belt:"Red",
      rate: 30
    }
  ];


});
