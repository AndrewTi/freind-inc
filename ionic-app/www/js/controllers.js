angular.module('starter.controllers', [])

.controller("GloalCrtl", function($scope, $ionicSideMenuDelegate) {
  $scope.openMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  }
})

.controller('AppCtrl', function($scope, $ionicSideMenuDelegate) {
  
})

.controller('PluginCtrl', function($scope, $ionicSideMenuDelegate, Plugins) {
  $scope.arrPlugins = Plugins.getData()

  console.log($scope.arrPlugins);
})



