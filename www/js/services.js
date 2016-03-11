angular.module('starter.services', [])

.factory('Houses', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var houses = [
                  {

                    id:0,
                    adr: "755 54e Av, Lachine",
                    Description:"Maison bien entretenue et bien éclairer avec 3 chambres à coucher avec garage. À proximité de tous les services. Porte-patio dans la salle à manger qui donne accès à la galerie arrière et au jardin mature. Les écoles, parcs et transports en commun sont facilement accessible à pied. Tous les planchers sont en bois franc. Des rénovations récentes ont été exécuté sur le toit, le système de chauffage, les fenêtres, la salle de bain, le foyer au propane, le chauffe-eau et le cabanon.",
                    img:"img/101.jpg",
                    prix:399000,
                    type:"Maison Unifamiliale",
                    nbCh:3,
                    nbSb:1
                  },
                  {
                    id:1,
                    adr: "755 54e Av, Lachine",
                    Description:"Maison bien entretenue et bien éclairer avec 3 chambres à coucher avec garage. À proximité de tous les services. Porte-patio dans la salle à manger qui donne accès à la galerie arrière et au jardin mature. Les écoles, parcs et transports en commun sont facilement accessible à pied. Tous les planchers sont en bois franc. Des rénovations récentes ont été exécuté sur le toit, le système de chauffage, les fenêtres, la salle de bain, le foyer au propane, le chauffe-eau et le cabanon.",
                    img:"img/201.jpg",
                    prix:399000,
                    type:"Maison Unifamiliale",
                    nbCh:3,
                    nbSb:1
                  }
                ];

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
