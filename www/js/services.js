angular.module('starter.services', [])

.factory('Houses', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var houses = [{
    id: 0,
    name: 'test ben test',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return houses;
    },
    remove: function(house) {
      houses.splice(houses.indexOf(house), 1);
    },
    get: function(houseId) {
      for (var i = 0; i < houses.length; i++) {
        if (houses[i].id === parseInt(houseId)) {
          return houses[i];
        }
      }
      return null;
    }
  };
});
