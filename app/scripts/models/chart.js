Forests.Chart = DS.Model.extend({
  name    : DS.attr(),
  pictureUrl : DS.attr(),
  figureUrl   : DS.attr(),
  change      : DS.attr()

});

Forests.Chart.FIXTURES = [{

  id: 1,
  name: 'Abies lasiocarpa',
  pictureUrl: '../images/chart_abies_lasiocarpa.jpg',
  figureUrl: '../images/Abies_lasiocarpa.jpg',
  change: 'loss'

}, {

  id: 2,
  name: 'Picea engelmannii',
  pictureUrl: '../images/chart_picea_engelmannii.jpg',
  figureUrl: '../images/Picea_engelmannii.jpg',
  change: 'loss'

}, {

  id: 3,
  name: 'Pinus contorta',
  pictureUrl: '../images/chart_pinus_contorta.jpg',
  figureUrl: '../images/Pinus_contorta.jpg',
  change: 'loss'

}, {

  id: 4,
  name: 'Acer glabrum',
  pictureUrl: '../images/chart_acer_glabrum.jpg',
  figureUrl: '../images/Acer_glabrum.jpg',
  change: 'loss'

}, {

  id: 5,
  name: 'Pinus ponderosa',
  pictureUrl: '../images/chart_pinus_ponderosa.jpg',
  figureUrl: '../images/Pinus_ponderosa.jpg',
  change: 'loss'

}, {

  id: 6,
  name: 'Pinus jeffreyi',
  pictureUrl: '../images/chart_pinus_jeffreyi.jpg',
  figureUrl: '../images/Pinus_jeffreyi.jpg',
  change: 'loss'

}, {

  id: 7,
  name: 'Pinus edulis',
  pictureUrl: '../images/chart_pinus_edulis.jpg',
  figureUrl: '../images/Pinus_edulis.jpg',
  change: 'loss'

}, {

  id: 8,
  name: 'Pseudotsuga menziesii',
  pictureUrl: '../images/chart_pseudotsuga_menziesii.jpg',
  figureUrl: '../images/Pseudotsuga_menziesii.jpg',
  change: 'loss'

}, {

  id: 9,
  name: 'Tsuga heterophylla',
  pictureUrl: '../images/chart_tsuga_heterophylla.jpg',
  figureUrl: '../images/Tsuga_heterophylla.jpg',
  change: 'loss'

}, {

  id: 10,
  name: 'Acacia greggii',
  pictureUrl: '../images/chart_acacia_greggii.jpg',
  figureUrl: '../images/Acacia_greggii.jpg',
  change: 'gain'

}, {

  id: 11,
  name: 'Olneya tesota',
  pictureUrl: '../images/chart_olneya_tesota.jpg',
  figureUrl: '../images/Olneya_tesota.jpg',
  change: 'gain'

}, {

  id: 12,
  name: 'Quercus gambelii',
  pictureUrl: '../images/chart_quercus_gambelii.jpg',
  figureUrl: '../images/Quercus_gambelii.jpg',
  change: 'gain'

}, {

  id: 13,
  name: 'Juniperus osteosperma',
  pictureUrl: '../images/chart_juniperus_osteosperma.jpg',
  figureUrl: '../images/Juniperus_osteosperma.jpg',
  change: 'gain'

}];
