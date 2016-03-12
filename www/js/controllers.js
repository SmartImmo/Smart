angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {

   var options = {timeout: 10000, enableHighAccuracy: true};

   $cordovaGeolocation.getCurrentPosition(options).then(function(position){

     var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

     var mapOptions = {
       center: latLng,
       zoom: 11,
       mapTypeId: google.maps.MapTypeId.ROADMAP
     };

     $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

     // Data for the markers consisting of a name, a LatLng and a zIndex for the
       // order in which these markers should display on top of each other.
   var maisons = [
   ['Maison Unifamiliale, 3 ch, 1sb ', 45.451460867719966, -73.62281799316406, 4],
   ['Condo, 1 ch, 1 sb', 45.4990653, -73.5641852, 5],
   ['Condo, 3 ch, 2 sb ', 45.56472399999999, -73.60267870000001, 3],
   ['Duplex, 8 ch, 3 sb', 45.4427897646004, -73.46076965332031, 2],
   ['Duplex, 3 ch, 2 sb', 45.60058738537025, -73.76289367675781, 1]
 ];

 var image = {
           url: 'img/Map/maisonFlag.png',
           // This marker is 20 pixels wide by 32 pixels high.
           size: new google.maps.Size(20, 32),
           // The origin for this image is (0, 0).
           origin: new google.maps.Point(0, 0),
           // The anchor for this image is the base of the flagpole at (0, 32).
           anchor: new google.maps.Point(0, 32)
         };

 var shape = {
           coords: [1, 1, 1, 20, 18, 20, 18, 1],
           type: 'poly'
         };
         for (var i = 0; i < maisons.length; i) {
           var maison = maisons[i];
           var marker = new google.maps.Marker({
             position: {lat: maison[1], lng: maison[2]},
             map: $scope.map,
             icon: image,
             shape: shape,
             title: maison[0],
             zIndex: maison[3]
           });
         }

     //Wait until the map is loaded
 google.maps.event.addListenerOnce($scope.map, 'idle', function(){

   var marker = new google.maps.Marker({
       map: $scope.map,
       animation: google.maps.Animation.DROP,
       position: latLng
   });

   var infoWindow = new google.maps.InfoWindow({
       content: "Vous êtes ici!"
   });

   google.maps.event.addListener(marker, 'click', function () {
       infoWindow.open($scope.map, marker);
   });

 });

   }, function(error){
     console.log("Could not get location");
   });
 })

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
