Forests.Chart = DS.Model.extend({
  name         : DS.attr(),
  pictureUrl   : DS.attr(),
  figureUrl    : DS.attr(),
  change       : DS.attr()

});

Forests.Chart.FIXTURES = [{

  id: 1,
  name: 'Subalpine fir',
  pictureUrl: 'images/figure_abies_lasiocarpa.jpg',
  figureUrl: 'images/chart_abies_lasiocarpa.jpg',
  change: 'loss'

}, {

  id: 2,
  name: 'Englemann spruce',
  pictureUrl: 'images/figure_picea_engelmannii.jpg',
  figureUrl: 'images/chart_picea_engelmannii.jpg',
  change: 'loss'

}, {

  id: 3,
  name: 'Lodgepole pine',
  pictureUrl: 'images/figure_pinus_contorta.jpg',
  figureUrl: 'images/chart_pinus_contorta.jpg',
  change: 'loss'

}, {

  id: 4,
  name: 'Rocky Mountain maple',
  pictureUrl: 'images/figure_acer_glabrum.jpg',
  figureUrl: 'images/chart_acer_glabrum.jpg',
  change: 'loss'

}, {

  id: 5,
  name: 'Ponderosa pine',
  pictureUrl: 'images/figure_pinus_ponderosa.jpg',
  figureUrl: 'images/chart_pinus_ponderosa.jpg',
  change: 'loss'

}, {

  id: 6,
  name: 'Jeffrey pine',
  pictureUrl: 'images/figure_pinus_jeffreyi.jpg',
  figureUrl: 'images/chart_pinus_jeffreyi.jpg',
  change: 'loss'

}, {

  id: 7,
  name: 'Colorado pinyon pine',
  pictureUrl: 'images/figure_pinus_edulis.jpg',
  figureUrl: 'images/chart_pinus_edulis.jpg',
  change: 'loss'

}, {

  id: 8,
  name: 'Douglas fir',
  pictureUrl: 'images/figure_pseudotsuga_menziesii.jpg',
  figureUrl: 'images/chart_pseudotsuga_menziesii.jpg',
  change: 'loss'

}, {

  id: 9,
  name: 'Western hemlock',
  pictureUrl: 'images/figure_tsuga_heterophylla.jpg',
  figureUrl: 'images/chart_tsuga_heterophylla.jpg',
  change: 'loss'

}, {

  id: 10,
  name: 'Catclaw acacia',
  pictureUrl: 'images/figure_acacia_greggii.jpg',
  figureUrl: 'images/chart_acacia_greggii.jpg',
  change: 'gain'

}, {

  id: 11,
  name: 'Desert Ironwood',
  pictureUrl: 'images/figure_olneya_tesota.jpg',
  figureUrl: 'images/chart_olneya_tesota.jpg',
  change: 'gain'

}, {

  id: 12,
  name: 'Gambel Oak',
  pictureUrl: 'images/figure_quercus_gambelii.jpg',
  figureUrl: 'images/chart_quercus_gambelii.jpg',
  change: 'gain'

}, {

  id: 13,
  name: 'Utah Juniper',
  pictureUrl: 'images/figure_juniperus_osteosperma.jpg',
  figureUrl: 'images/chart_juniperus_osteosperma.jpg',
  change: 'gain'

}];
