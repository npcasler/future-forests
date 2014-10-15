Forests.Chart = DS.Model.extend({
  name    : DS.attr(),
  pictureUrl : DS.attr(),
  figureUrl   : DS.attr(),

});

Forests.Chart.FIXTURES = [{

  id: 1,
  name: 'Chart1',
  pictureUrl: '../images/aspen-current.jpg',
  figureUrl: '../images/Juniperus_osteosperma.jpg',

}, {

  id: 2,
  name: 'Chart2',
  pictureUrl: '../images/aspen26.jpg',
  figureUrl: '../images/Abies_lasiocarpa.jpg'

}];
