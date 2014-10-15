Forests.Plant = DS.Model.extend({
  name            : DS.attr(),
  sci_name        : DS.attr(),
});

Forests.Plant.FIXTURES = 

[
  {
    id:1,
    name:"Fir, Pacific Silver",
    sci_name:"Abies_amabilis"
  },
  {
    id:2,
    name:"Fir, White",
    sci_name:"Abies_concolor"
  },
  {
    id:3,
    name:"Fir, Grand ",
    sci_name:"Abies_grandis"
  },
  {
    id:4,
    name:"Fir, Subalpine ",
    sci_name:"Abies_lasiocarpa"
  },
  {
    id:5,
    name:"Fir, Red ",
    sci_name:"Abies_magnifica"
  },
  {
    id:6,
    name:"Fir, Noble ",
    sci_name:"Abies_procera"
  },
  {
    id:7,
    name:"Acacia, Whitethorn ",
    sci_name:"Acacia_constricta"
  },
  {
    id:8,
    name:"Acacia, Catclaw ",
    sci_name:"Acacia_greggii"
  },
  {
    id:9,
    name:"Maple, Rocky Mountain ",
    sci_name:"Acer_glabrum"
  },
  {
    id:10,
    name:"Maple, Bigtooth ",
    sci_name:"Acer_grandidentatum"
  },
  {
    id:11,
    name:"Maple, Bigleaf ",
    sci_name:"Acer_macrophyllum"
  },
  {
    id:12,
    name:"Maple, Boxelder",
    sci_name:"Acer_negundo"
  },
  {
    id:13,
    name:"Buckeye, Cali. ",
    sci_name:"Aesculus_californica"
  },
  {
    id:14,
    name:"Alder, White ",
    sci_name:"Alnus_rhombifolia"
  },
  {
    id:15,
    name:"Alder, Red ",
    sci_name:"Alnus_rubra"
  },
  {
    id:16,
    name:"Madrone, AZ ",
    sci_name:"Arbutus_arizonica"
  },
  {
    id:17,
    name:"Manzanita, Pringle ",
    sci_name:"Arctostaphylos_pringlei"
  },
  {
    id:18,
    name:"Manzanita, Pointleaf ",
    sci_name:"Arctostaphylos_pungens"
  },
  {
    id:19,
    name:"Sagebrush, Sand ",
    sci_name:"Artemisia_filifolia"
  },
  {
    id:20,
    name:"Sagebrush, Big ",
    sci_name:"Artemisia_tridentata"
  },
  {
    id:21,
    name:"Birch, Paper ",
    sci_name:"Betula_papyrifera"
  },
  {
    id:22,
    name:"Cedar, Cali. Incense ",
    sci_name:"Calocedrus_decurrens"
  },
  {
    id:23,
    name:"Saguaro Cactus",
    sci_name:"Carnegiea_gigantea"
  },
  {
    id:24,
    name:"Redbud, Western ",
    sci_name:"Cercis_occidentalis"
  },
  {
    id:25,
    name:"Mtn. Mahogany, Curl-Leaf ",
    sci_name:"Cercocarpus_ledifolius"
  },
  {
    id:26,
    name:"Cypress, Lawson ",
    sci_name:"Chamaecyparis_lawsoniana"
  },
  {
    id:27,
    name:"Dogwood, Pacific ",
    sci_name:"Cornus_nuttallii"
  },
  {
    id:28,
    name:"Cypress, AZ ",
    sci_name:"Cupressus_arizonica"
  },
  {
    id:29,
    name:"Ash, Oregon ",
    sci_name:"Fraxinus_latifolia"
  },
  {
    id:30,
    name:"Ash, Velvet ",
    sci_name:"Fraxinus_velutina"
  },
  {
    id:31,
    name:"Toyon",
    sci_name:"Heteromeles_arbutifolia"
  },
  {
    id:32,
    name:"Juniper, Coahuila ",
    sci_name:"Juniperus_coahuilensis"
  },
  {
    id:33,
    name:"Juniper, Alligator ",
    sci_name:"Juniperus_deppeana"
  },
  {
    id:34,
    name:"Juniper, One-Seed ",
    sci_name:"Juniperus_monosperma"
  },
  {
    id:35,
    name:"Juniper, Western ",
    sci_name:"Juniperus_occidentalis"
  },
  {
    id:36,
    name:"Juniper, Utah ",
    sci_name:"Juniperus_osteosperma"
  },
  {
    id:37,
    name:"Juniper, Rocky Mtn.",
    sci_name:"Juniperus_scopulorum"
  },
  {
    id:38,
    name:"Larch, Alpine",
    sci_name:"Larix_lyallii"
  },
  {
    id:39,
    name:"Larch, Western ",
    sci_name:"Larix_occidentalis"
  },
  {
    id:40,
    name:"Creosote Bush",
    sci_name:"Larrea_tridentata"
  },
  {
    id:41,
    name:"Tanoak",
    sci_name:"Lithocarpus_densiflorus"
  },
  {
    id:42,
    name:"Desert Ironwood",
    sci_name:"Olneya_tesota"
  },
  {
    id:43,
    name:"Palo Verde, Mexican ",
    sci_name:"Parkinsonia_aculeata"
  },
  {
    id:44,
    name:"Palo Verde, Blue ",
    sci_name:"Parkinsonia_florida"
  },
  {
    id:45,
    name:"Palo Verde, Yellow ",
    sci_name:"Parkinsonia_microphylla"
  },
  {
    id:46,
    name:"Spruce, Brewer's ",
    sci_name:"Picea_breweriana"
  },
  {
    id:47,
    name:"Spruce, Engelmann",
    sci_name:"Picea_engelmannii"
  },
  {
    id:48,
    name:"Spruce, Blue ",
    sci_name:"Picea_pungens"
  },
  {
    id:49,
    name:"Spruce, Sitka ",
    sci_name:"Picea_sitchensis"
  },
  {
    id:50,
    name:"Pine, Whitebark ",
    sci_name:"Pinus_albicaulis"
  },
  {
    id:51,
    name:"Pine, Rocky Mtn. Bristlecone",
    sci_name:"Pinus_aristata"
  },
  {
    id:52,
    name:"Pine, Knobcone",
    sci_name:"Pinus_attenuata"
  },
  {
    id:53,
    name:"Pine, Pinyon, Mexican ",
    sci_name:"Pinus_cembroides"
  },
  {
    id:54,
    name:"Pine, Lodgepole",
    sci_name:"Pinus_contorta"
  },
  {
    id:55,
    name:"Pine, Coulter",
    sci_name:"Pinus_coulteri"
  },
  {
    id:56,
    name:"Pine, Pinyon, Colorado ",
    sci_name:"Pinus_edulis"
  },
  {
    id:57,
    name:"Pine, Limber ",
    sci_name:"Pinus_flexilis"
  },
  {
    id:58,
    name:"Pine, Jeffrey ",
    sci_name:"Pinus_jeffreyi"
  },
  {
    id:59,
    name:"Pine, Sugar ",
    sci_name:"Pinus_lambertiana"
  },
  {
    id:60,
    name:"Pine, Chihuahua ",
    sci_name:"Pinus_leiophylla"
  },
  {
    id:61,
    name:"Great Basin Bristlecone Pine",
    sci_name:"Pinus_longaeva"
  },
  {
    id:62,
    name:"Pine, Pinyon, Single Leaf ",
    sci_name:"Pinus_monophylla"
  },
  {
    id:63,
    name:"Pine, Western White",
    sci_name:"Pinus_monticola"
  },
  {
    id:64,
    name:"Pine, Ponderosa ",
    sci_name:"Pinus_ponderosa"
  },
  {
    id:65,
    name:"Pine, Chihuahua White ",
    sci_name:"Pinus_strobiformis"
  },
  {
    id:66,
    name:"Cottonwood, Eastern ",
    sci_name:"Populus_deltoides"
  },
  {
    id:67,
    name:"Velvet Mesquite",
    sci_name:"Prosopis_velutina"
  },
  {
    id:68,
    name:"Oak, Coast Live ",
    sci_name:"Quercus_agrifolia"
  },
  {
    id:69,
    name:"Oak, Arizona White",
    sci_name:"Quercus_arizonica"
  },
  {
    id:70,
    name:"Oak, Canyon Live",
    sci_name:"Quercus_chrysolepis"
  },
  {
    id:71,
    name:"Oak, Blue ",
    sci_name:"Quercus_douglasii"
  },
  {
    id:72,
    name:"Oak, Emory ",
    sci_name:"Quercus_emoryi"
  },
  {
    id:73,
    name:"Oak, Gambel ",
    sci_name:"Quercus_gambelii"
  },
  {
    id:74,
    name:"Oak, Oregon White ",
    sci_name:"Quercus_garryana"
  },
  {
    id:75,
    name:"Oak, Gray ",
    sci_name:"Quercus_grisea"
  },
  {
    id:76,
    name:"Oak, Silverleaf ",
    sci_name:"Quercus_hypoleucoides"
  },
  {
    id:77,
    name:"Oak, California Black ",
    sci_name:"Quercus_kelloggii"
  },
  {
    id:78,
    name:"Oak, Valley ",
    sci_name:"Quercus_lobata"
  },
  {
    id:79,
    name:"Oak, Mexican Blue ",
    sci_name:"Quercus_oblongifolia"
  },
  {
    id:80,
    name:"Oak, Palmer ",
    sci_name:"Quercus_palmeri"
  },
  {
    id:81,
    name:"Oak, Netleaf ",
    sci_name:"Quercus_rugosa"
  },
  {
    id:82,
    name:"Oak, Interior Live",
    sci_name:"Quercus_wislizeni"
  },
  {
    id:83,
    name:"Locust, New Mexican",
    sci_name:"Robinia_neomexicana"
  },
  {
    id:84,
    name:"Sequoia, Giant ",
    sci_name:"Sequoiadendron_giganteum"
  },
  {
    id:85,
    name:"Redwood, Coast ",
    sci_name:"Sequoia_sempervirens"
  },
  {
    id:86,
    name:"Yew, Pacific ",
    sci_name:"Taxus_brevifolia"
  },
  {
    id:87,
    name:"Cedar, Western Red",
    sci_name:"Thuja_plicata"
  },
  {
    id:88,
    name:"Hemlock, Western ",
    sci_name:"Tsuga_heterophylla"
  },
  {
    id:89,
    name:"Hemlock, Mountain ",
    sci_name:"Tsuga_mertensiana"
  },
  {
    id:90,
    name:"Laurel, California Bay",
    sci_name:"Umbellularia_californica"
  },
  {
    id:91,
    name: "Fir, Douglas",
    sci_name: "Pseudotsuga_menziesii"
  },
  {
    id:92,
    name: "Aspen, Quaking",
    sci_name: "Populus_tremuloides"
  }
];
