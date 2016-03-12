angular.module('starter.services', [])

.factory('Houses', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var houses = [
                  {
                      "Adresse":"755 54e Av, Lachine" ,
                      "Ville": "Montréal",
                  		"Code Postale":"H8T 3A5",
                  		"Type": "Maison Unifamiliale",
                      "Style": "Detaché",
                  		"Précision":"Entièrement rénové",
                  		"Caractéristiques":"Avec jardin",
                      "Nombre_des_chambres": "3",
                      "Nombre_de_piéce": "8",
                      "Nombre_des_salles_de_bain": "1",
                      "Etage": "2",
                      "Prix": "399000",
                  		"Aire Habitable":"22x24 pi (6.71x7.32 m)",
                      "Année de construction": "1951",
                  		"Description":"Maison bien entretenue et bien éclairer avec 3 chambres à coucher avec garage. À proximité de tous les services. Porte-patio dans la salle à manger qui donne accès à la galerie arrière et au jardin mature. Les écoles, parcs et transports en commun sont facilement accessible à pied. Tous les planchers sont en bois franc. Des rénovations récentes ont été exécuté sur le toit, le système de chauffage, les fenêtres, la salle de bain, le foyer au propane, le chauffe-eau et le cabanon." ,
                      "Dimension de terrain":"5 084 pi² (472.32 m²)",
                      "Téléphone": "514-601-9892",
                      "Code": 1,
                  		"imgL":
                                      	[
                                          "https://s3.amazonaws.com/smartimmo/img/large/1/101.jpg",
                                          "https://s3.amazonaws.com/smartimmo/img/large/1/102.jpg",
                                          "https://s3.amazonaws.com/smartimmo/img/large/1/103.jpg",
                                          "https://s3.amazonaws.com/smartimmo/img/large/1/104.jpg"
                                        ],
                      "imgS":
                                        [
                                          "https://s3.amazonaws.com/smartimmo/img/small/1/101.jpg",
                                          "https://s3.amazonaws.com/smartimmo/img/small/1/102.jpg",
                                          "https://s3.amazonaws.com/smartimmo/img/small/1/103.jpg"
                                        ],
                  		"Latitude": "45.444557",
                      "Longtitude":"-73.718542"
                  },

                  {
                      "Adresse":"108-5425 rue Saint-Denis",
                      "Ville": "Montréal",
                      "Code Postale":"H2J 4B8",
                      "Type": "Maison Condo",
                      "Style": "Copropriété divise",
                      "Précision":"Entièrement rénové",
                      "Caractéristiques":
                            [
                              "  Construction neuve de qualite superieure adaptee pour personnes a mobilite reduite.",
                              "  Grande fenestration, très lumineux.",
                              " Bâtiment sous garantie jusquen fin 2016",
                              " Espace fermé pour Laveuse/sécheuse"

                            ],
                      "Nombre de  piéce": "3",
                      "Nombre_des_chambres": "1",
                      "Nombre_des_salles_de_bain": "1",
                      "Etage": "1",
                      "Prix":"189000",
                      "Aire Habitable":"512.36 pi² (47.60 m²)",
                      "Année de construction":"2011",
                      "Description":" Joli condo au coeur du Plateau à trois minutes du métro Laurier et Rosemont, et du Parc Laurier. Une chambre à coucher fermée.",
                      "Téléphone": "514-560-4633",
                      "Code": 2,
                      "imgL":
                                           [
                                              "https://s3.amazonaws.com/smartimmo/img/large/2/201.jpg",
                                              "https://s3.amazonaws.com/smartimmo/img/large/2/202.jpg",
                                              "https://s3.amazonaws.com/smartimmo/img/large/2/203.jpg",
                                              "https://s3.amazonaws.com/smartimmo/img/large/2/204.jpg"
                                            ],
                      "imgS":
                                           [
                                              "https://s3.amazonaws.com/smartimmo/img/small/2/201.jpg",
                                              "https://s3.amazonaws.com/smartimmo/img/small/2/202.jpg",
                                              "https://s3.amazonaws.com/smartimmo/img/small/2/203.jpg",

                                            ],
                      "Latitude":"45.5290597",
                      "Longtitude":"-73.5937183"
                  },

                  {
                      "Adresse":"8657 rue Centrale, LaSalle",
                  		"Ville": "Montréal",
                  		"Code Postale":"H8P 1N4",
                  		"Type": "Maison Condo",
                  		"Style": "Copropriété divise",
                  		"Précision": "Avec Garage",
                      "Caractéristiques": ["garage intérieur permettant beaucoup de rangement, foyer au bois et climatiseur"],
                  		"Nombre_des_chambres":"3",
                      "Nombre de  piéce": "6",
                      "Nombre_des_salles_de_bain":"2",
                  		"Etage":  "1",
                  		"Prix": "339000",
                      "Aire Habitable": "1 425 pi² (132.39 m²)",
                      "Année de construction":"2005",
                      "Description":"Près du bord de l'eau et de la piste cyclable, de l'Hôpital Lasalle, de l'arena Jacques Lemaire, de la piscine municipale, d'un parc, d'un terrain de tennis, d'une école primaire, d'écoles secondaires francophone et anglophone, d'un nettoyeur.\nCondo avec 3 chambres à coucher, deux salles de bain complètes, accès exclusif à la cour arrière, garage intérieur permettant beaucoup de rangement, foyer au bois et climatiseur.",
                      "Dimension de terrain": "135 m² (1 453.13 pi²)",
                      "Téléphone":"514-616-7267",
                  		"Code":3,
                      "imgL":
                                        [
                                          "https://s3.amazonaws.com/smartimmo/img/large/3/301.jpg",
                                          "https://s3.amazonaws.com/smartimmo/img/large/3/302.jpg",
                                          "https://s3.amazonaws.com/smartimmo/img/large/3/303.jpg",
                                          "https://s3.amazonaws.com/smartimmo/img/large/3/303.jpg"
                                        ],
                      "imgS":
                                        [
                                          "https://s3.amazonaws.com/smartimmo/img/small/3/301.jpg",
                                          "https://s3.amazonaws.com/smartimmo/img/small/3/302.jpg",
                                          "https://s3.amazonaws.com/smartimmo/img/small/3/303.jpg"
                                        ],
                      "Latitude": "45.4173602",
                      "Longtitude": "-73.6200776",
                  },


                  {
                       "Adresse":"5201 rue Saranac, Cote des neiges",
                  		 "Ville": "Montréal",
                  		 "Code Postale":"H3W 1Z7",
                  		 "Type":"Duplex",
                  		 "Style": "Semi-détaché",
                  		 "Précision":"Avec Revenus",
                       "Caractéristiques":
                                        [
                                          " Garage double chauffé avec porte motorisée.",
                                          "Rez-de-chaussée aménagé au goût du jour avec paisible voisinage"
                                        ],
                  		 "Nombre_des_chambres": "8",
                       "Nombre de  piéce":"12",
                       "Nombre_des_salles_de_bain": "3",
                  		 "Etage": "1",
                  		 "Prix": "575000",
                       "Aire Habitable":"23x46 pi (7.01x14.02 m)",
                       "Année de construction":"1929",
                  		 "Description":"Charmant duplex situé dans un cul-de-sac sur la rue Saranac, à deux pas du métro Snowdon et Villa Maria, plusieurs lignes d'autobus au coin des rues. Près de tous les services (école, parc, bibliothèque, métro, pharmacie, universités, dans un quartier résidentiel où il fait bon vivre. À 5 min du Village Monkland et de la 720. À 5 min du CUSM et autoroute 15. \nBien entretenu, des rénovations ont été apportées au cours des dernières années : cuisine, salle de bain, plafond suspendu, sous-sol au complet, peinture et planchers de bois franc; nouveau système de chauffage plus performant (novembre 2012).\nRez-de-chaussée aménagé au goût du jour avec paisible voisinage. Garage double chauffé avec porte motorisée.\nRez-de-chaussée\n6-1/2 avec 3 chambres fermées, cuisine et salle à manger à aire ouverte, très lumineux. Poêle, réfrigérateur inclus.\n2e étage loué 820$ pas chauffé avec 3 cac. Locataires fiables. ",
                       "Dimension de terrain":"8.53x27.43 m (27.99x89.99 pi)",
                  		 "Téléphone":"514-509-6137",
                       "Code":4,
                       "imgL":
                                        [
                                          "https://s3.amazonaws.com/smartimmo/img/large/4/401.jpg",
                                          "https://s3.amazonaws.com/smartimmo/img/large/4/402.jpg",
                                          "https://s3.amazonaws.com/smartimmo/img/large/4/403.jpg",
                                          "https://s3.amazonaws.com/smartimmo/img/large/4/404.jpg"
                                        ],
                       "imgS":
                                        [
                                          "https://s3.amazonaws.com/smartimmo/img/small/4/401.jpg",
                                          "https://s3.amazonaws.com/smartimmo/img/small/4/402.jpg",
                                          "https://s3.amazonaws.com/smartimmo/img/small/4/403.jpg"
                                        ],
                       "Latitude": "45.4829875",
                       "Longtitude": "-73.624208"
                  },

                  {
                        "Adresse":"6237 avenue de Lorimier",
                        "Ville":"Montréal",
                        "Code Postale":"H2G 2P5",
                        "Type":"Duplex",
                  			"Style":"Semi-détaché",
                  			"Caractéristiques": ["Climatisation, chauffage et circulation d'air"],
                  			"Nombre_des_chambres":"3",
                        "Nombre de  piéce":"14",
                        "Nombre_des_salles_de_bain":"2",
                        "Etage":"1",
                        "Prix": "685000",
                  			"Aire Habitable":" 2 250 pi² (209.03 m²)",
                        "Année de construction":"1937",
                        "Description":"Très beau et grand duplex dans le quartier Rosemont-Petite-Patrie près de Beaubien et de ses boutiques. Le duplex est lumineux, rénové tout en gardant le cachet d'origine, et situé sur un des plus grands terrains du quartier. En plus de posséder un sous-sol fini d'environ 7 pieds, un bel espace salon-salle à manger, une cuisine avec ilot et 3 chambres, le duplex bénéficie d'une grande cour aménagée pour recevoir et pour jardiner, en plus de deux stationnements utilisables toute l'année. L'immeuble, en très bon état, a été entretenu avec soin.",
                        "Dimension de terrain":" 2 800 pi² (260.13 m²)",
                        "Téléphone":"514-723-1681",
                  			"Code":5,
                        "imgL":
                                        [
                                          "https://s3.amazonaws.com/smartimmo/img/large/5/501.jpg",
                                          "https://s3.amazonaws.com/smartimmo/img/large/5/502.jpg",
                                          "https://s3.amazonaws.com/smartimmo/img/large/5/503.jpg",
                                          "https://s3.amazonaws.com/smartimmo/img/large/5/504.jpg"
                                        ],
                        "imgS":
                                        [
                                          "https://s3.amazonaws.com/smartimmo/img/small/5/501.jpg",
                                          "https://s3.amazonaws.com/smartimmo/img/small/5/502.jpg",
                                          "https://s3.amazonaws.com/smartimmo/img/small/5/503.jpg"
                                        ],
                        "Latitude":"45.5443473",
                        "Longtitude":"-73.591679"

                  },

                  {
                            "Adresse": "1550 avenue Sainte-Croix",
                  					"Ville":"Montréal",
                  					"Code Postale": "H4L 3Z6",
                  					"Type":"Maison Unifamiliale",
                  					"Style":"Detaché",
                  					"Précision":"rénové en 2014",
                            "Caractéristiques":"Jardin",
                  					"Nombre_des_chambres": "4",
                            "Nombre de  piéce":"8",
                            "Nombre des salles d'eau": "1",
                            "Nombre_des_salles_de_bain":"1",
                            "Etage":"2",
                  					"Prix":"410000",
                  					"Aire Habitable":"122 m² (1 313.20 pi²)",
                            "Année de construction": "1948",
                  					"Description": "Maison unifamiliale lumineuse rénovée dans un quartier recherché à Ville Saint-Laurent.  Renovée en 2014.  Grande cour clotûrée, orientation sud-ouest.  2 espaces de stationnement côte-à-côte. Située sur une rue paisible.  À proximité des autoroutes 15 et 40 et de tous les services.",
                            "Dimension de terrain":"398 m² (4 284.04 pi²)",
                  					"Téléphone":"514-886-8098",
                            "Code":6,
                            "imgL":
                                        [
                                          "https://s3.amazonaws.com/smartimmo/img/large/6/601.jpg",
                                          "https://s3.amazonaws.com/smartimmo/img/large/6/602.jpg",
                                          "https://s3.amazonaws.com/smartimmo/img/large/6/603.jpg"
                                        ],
                            "imgS":
                                        [
                                          "https://s3.amazonaws.com/smartimmo/img/small/6/601.jpg",
                                          "https://s3.amazonaws.com/smartimmo/img/small/6/602.jpg",
                                          "https://s3.amazonaws.com/smartimmo/img/small/6/603.jpg"
                                        ],
                            "Latitude": "45.5208027",
                            "Longtitude":"-73.6873454"
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
        if (houses[i].Code === parseInt(houseId)) {
          return houses[i];
        }
      }
      return null;
    }
  };
});
