angular.module('starter.services', [])

.factory('Houses', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var houses = [
                  {
                    adresse:"755 54e Av, Lachine" ,
                    aireHabit:"22x24 pi (6.71x7.32 m)",
                    anneeContruct: "1951",
                    caracteristiques:["Jardin"],
                    code: 1,
                    codePostal:"H8T 3A5",
                    description:"Maison bien entretenue et bien éclairer avec 3 chambres à coucher avec garage. À proximité de tous les services. Porte-patio dans la salle à manger qui donne accès à la galerie arrière et au jardin mature. Les écoles, parcs et transports en commun sont facilement accessible à pied. Tous les planchers sont en bois franc. Des rénovations récentes ont été exécuté sur le toit, le système de chauffage, les fenêtres, la salle de bain, le foyer au propane, le chauffe-eau et le cabanon." ,
                    dimTerrain:"5 084 pi² (472.32 m²)",
                    etage: "2",
                    imgL:
                    	[
                        "https://s3.amazonaws.com/smartimmo/img/large/1/101.jpg",
                        "https://s3.amazonaws.com/smartimmo/img/large/1/102.jpg",
                        "https://s3.amazonaws.com/smartimmo/img/large/1/103.jpg"
                      ],
                    imgS:
                      [
                        "https://s3.amazonaws.com/smartimmo/img/small/1/101.jpg",
                        "https://s3.amazonaws.com/smartimmo/img/small/1/102.jpg",
                        "https://s3.amazonaws.com/smartimmo/img/small/1/103.jpg"
                      ],
                    Latitude: "45.444557",
                    Longtitude:"-73.718542",
                    nbCh: "3",
                    nbPieces: "8",
                    nbSb: "1",
                    precision:"Entièrement rénové",
                    prix: "399000",
                    style: "Detaché",
                    telephone: "514-601-9892",
                    type: "Maison Unifamiliale",
                    ville: "Montréal"
                    },

                  {
                    adresse:"108-5425 rue Saint-Denis",
                    aireHabit:"512.36 pi² (47.60 m²)",
                    anneeContruct:"2011",
                    caracteristiques:
                     [
                        "  Construction neuve de qualite superieure adaptee pour personnes a mobilite reduite.",
                        "  Grande fenestration, très lumineux.",
                        " Bâtiment sous garantie jusquen fin 2016",
                        " Espace fermé pour Laveuse/sécheuse"
                      ],
                    code: 2,
                    codePostal:"H2J 4B8",
                    description:" Joli condo au coeur du Plateau à trois minutes du métro Laurier et Rosemont, et du Parc Laurier. Une chambre à coucher fermée.",
                    etage: "1",
                    imgL:
                     [
                        "https://s3.amazonaws.com/smartimmo/img/large/2/201.jpg",
                        "https://s3.amazonaws.com/smartimmo/img/large/2/202.jpg",
                        "https://s3.amazonaws.com/smartimmo/img/large/2/203.jpg"
                      ],
                    imgS:
                     [
                        "https://s3.amazonaws.com/smartimmo/img/small/2/201.jpg",
                        "https://s3.amazonaws.com/smartimmo/img/small/2/202.jpg",
                        "https://s3.amazonaws.com/smartimmo/img/small/2/203.jpg"
                      ],
                    Latitude:"45.5290597",
                    Longtitude:"-73.5937183",
                    nbCh: "1",
                    nbPieces: "3",
                    nbSb: "1",
                    precision:"Entièrement rénové",
                    prix:"189000",
                    style: "Copropriété divise",
                    telephone: "514-560-4633",
                    type: "Maison Condo",
                    ville: "Montréal"
                    },

                  {
                    adresse:"8657 rue Centrale, LaSalle",
                    aireHabit: "1 425 pi² (132.39 m²)",
                    anneeContruct:"2005",
                    caracteristiques: ["garage intérieur permettant beaucoup de rangement, foyer au bois et climatiseur"],
                    code:3,
                    codePostal:"H8P 1N4",
                    description:"Près du bord de l'eau et de la piste cyclable, de l'Hôpital Lasalle, de l'arena Jacques Lemaire, de la piscine municipale, d'un parc, d'un terrain de tennis, d'une école primaire, d'écoles secondaires francophone et anglophone, d'un nettoyeur.\nCondo avec 3 chambres à coucher, deux salles de bain complètes, accès exclusif à la cour arrière, garage intérieur permettant beaucoup de rangement, foyer au bois et climatiseur.",
                    dimTerrain: "135 m² (1 453.13 pi²)",
                    etage:  "1",
                    imgL:
                      [
                        "https://s3.amazonaws.com/smartimmo/img/large/3/301.jpg",
                        "https://s3.amazonaws.com/smartimmo/img/large/3/302.jpg",
                        "https://s3.amazonaws.com/smartimmo/img/large/3/303.jpg"
                      ],
                    imgS:
                      [
                        "https://s3.amazonaws.com/smartimmo/img/small/3/301.jpg",
                        "https://s3.amazonaws.com/smartimmo/img/small/3/302.jpg",
                        "https://s3.amazonaws.com/smartimmo/img/small/3/303.jpg"
                      ],
                    Latitude: "45.4173602",
                    Longtitude: "-73.6200776",
                    nbCh:"3",
                    nbPieces: "6",
                    nbSb:"2",
                    precision: "Avec Garage",
                    prix: "339000",
                    style: "Copropriété divise",
                    telephone:"514-616-7267",
                    type: "Maison Condo",
                    ville: "Montréal"
                  },


                  {
                    adresse:"5201 rue Saranac, Cote des neiges",
                    aireHabit:"23x46 pi (7.01x14.02 m)",
                    anneeContruct:"1929",
                    caracteristiques:
                      [
                        " Garage double chauffé avec porte motorisée.",
                        "Rez-de-chaussée aménagé au goût du jour avec paisible voisinage"
                      ],
                    code:4,
                    codePostal:"H3W 1Z7",
                    description:"Charmant duplex situé dans un cul-de-sac sur la rue Saranac, à deux pas du métro Snowdon et Villa Maria, plusieurs lignes d'autobus au coin des rues. Près de tous les services (école, parc, bibliothèque, métro, pharmacie, universités, dans un quartier résidentiel où il fait bon vivre. À 5 min du Village Monkland et de la 720. À 5 min du CUSM et autoroute 15. \nBien entretenu, des rénovations ont été apportées au cours des dernières années : cuisine, salle de bain, plafond suspendu, sous-sol au complet, peinture et planchers de bois franc; nouveau système de chauffage plus performant (novembre 2012).\nRez-de-chaussée aménagé au goût du jour avec paisible voisinage. Garage double chauffé avec porte motorisée.\nRez-de-chaussée\n6-1/2 avec 3 chambres fermées, cuisine et salle à manger à aire ouverte, très lumineux. Poêle, réfrigérateur inclus.\n2e étage loué 820$ pas chauffé avec 3 cac. Locataires fiables. ",
                    dimTerrain:"8.53x27.43 m (27.99x89.99 pi)",
                    etage: "1",
                    imgL:
                      [
                        "https://s3.amazonaws.com/smartimmo/img/large/4/401.jpg",
                        "https://s3.amazonaws.com/smartimmo/img/large/4/402.jpg",
                        "https://s3.amazonaws.com/smartimmo/img/large/4/403.jpg"
                      ],
                    imgS:
                      [
                        "https://s3.amazonaws.com/smartimmo/img/small/4/401.jpg",
                        "https://s3.amazonaws.com/smartimmo/img/small/4/402.jpg",
                        "https://s3.amazonaws.com/smartimmo/img/small/4/403.jpg"
                      ],
                    Latitude: "45.4829875",
                    Longtitude: "-73.624208",
                    nbCh: "8",
                    nbPieces:"12",
                    nbSb: "3",
                    precision:"Avec Revenus",
                    prix: "575000",
                    style: "Semi-détaché",
                    telephone:"514-509-6137",
                    type:"Duplex",
                    ville: "Montréal"
                  },

                  {
                    adresse:"6237 avenue de Lorimier",
                    aireHabit:" 2 250 pi² (209.03 m²)",
                    anneeContruct:"1937",
                    caracteristiques: ["Climatisation, chauffage et circulation d'air"],
                    code:5,
                    codePostal:"H2G 2P5",
                    description:"Très beau et grand duplex dans le quartier Rosemont-Petite-Patrie près de Beaubien et de ses boutiques. Le duplex est lumineux, rénové tout en gardant le cachet d'origine, et situé sur un des plus grands terrains du quartier. En plus de posséder un sous-sol fini d'environ 7 pieds, un bel espace salon-salle à manger, une cuisine avec ilot et 3 chambres, le duplex bénéficie d'une grande cour aménagée pour recevoir et pour jardiner, en plus de deux stationnements utilisables toute l'année. L'immeuble, en très bon état, a été entretenu avec soin.",
                    dimTerrain:" 2 800 pi² (260.13 m²)",
                    etage:"1",
                    imgL:
                      [
                        "https://s3.amazonaws.com/smartimmo/img/large/5/501.jpg",
                        "https://s3.amazonaws.com/smartimmo/img/large/5/502.jpg",
                        "https://s3.amazonaws.com/smartimmo/img/large/5/503.jpg"
                      ],
                    imgS:
                      [
                        "https://s3.amazonaws.com/smartimmo/img/small/5/501.jpg",
                        "https://s3.amazonaws.com/smartimmo/img/small/5/502.jpg",
                        "https://s3.amazonaws.com/smartimmo/img/small/5/503.jpg"
                      ],
                    Latitude:"45.5443473",
                    Longtitude:"-73.591679",
                    nbCh:"3",
                    nbPieces:"14",
                    nbSb:"2",
                    prix: "685000",
                    style:"Semi-détaché",
                    telephone:"514-723-1681",
                    type:"Duplex",
                    ville:"Montréal"
                  },

                  {
                    adresse: "1550 avenue Sainte-Croix",
                    aireHabit:"122 m² (1 313.20 pi²)",
                    anneeContruct: "1948",
                    caracteristiques:["Jardin"],
                    code:6,
                    codePostal: "H4L 3Z6",
                    description: "Maison unifamiliale lumineuse rénovée dans un quartier recherché à Ville Saint-Laurent.  Renovée en 2014.  Grande cour clotûrée, orientation sud-ouest.  2 espaces de stationnement côte-à-côte. Située sur une rue paisible.  À proximité des autoroutes 15 et 40 et de tous les services.",
                    dimTerrain:"398 m² (4 284.04 pi²)",
                    etage:"2",
                    imgL:
                      [
                        "https://s3.amazonaws.com/smartimmo/img/large/6/601.jpg",
                        "https://s3.amazonaws.com/smartimmo/img/large/6/602.jpg",
                        "https://s3.amazonaws.com/smartimmo/img/large/6/603.jpg"
                      ],
                    imgS :
                      [
                        "https://s3.amazonaws.com/smartimmo/img/small/6/601.jpg",
                        "https://s3.amazonaws.com/smartimmo/img/small/6/602.jpg",
                        "https://s3.amazonaws.com/smartimmo/img/small/6/603.jpg"
                      ],
                    Latitude: "45.5208027",
                    Longtitude:"-73.6873454",
                    nbCh: "4",
                    nbPieces:"8",
                    nbSalleDeau: "1",
                    nbSb:"1",
                    precision:"rénové en 2014",
                    prix:"410000",
                    style:"Detaché",
                    telephone:"514-886-8098",
                    type:"Maison Unifamiliale",
                    ville:"Montréal"
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
        if (houses[i].code === parseInt(houseId)) {
          return houses[i];
        }
      }
      return null;
    }
  };
});
