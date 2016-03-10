angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('HousesCtrl', function($scope, Houses) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.houses = Houses.all();
  $scope.remove = function(house) {
    Houses.remove(house);
  };
})

.controller('HouseDetailCtrl', function($scope, $stateParams, Houses) {
  $scope.house = Houses.get($stateParams.houseId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
