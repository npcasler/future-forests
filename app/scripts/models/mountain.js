Forests.Mountain = DS.Model.extend({
  city      		: DS.attr(),
  name          : DS.attr(),
  currentUrl   	: DS.attr(),
  worstUrl      : DS.attr(),
  bestUrl       : DS.attr(),

});

Forests.Mountain.FIXTURES = [{

  id: 1,
  city: 'Aspen',
  name: 'Aspen, CO',
  currentUrl: '../images/aspen-current.jpg',
  worstUrl: '../images/aspen85.gif',
  bestUrl: '../images/aspen26.gif'

}, {

  id: 2,
  city: 'Tucson',
  name: 'Tucson, AZ',
  currentUrl: '../images/lemmon-current.jpg',
  worstrl: '../images/lemmon85.gif',
  bestUrl: '../images/lemmon26.gif'

}, {

  id: 3,
  city: 'Crested Butte',
  name: 'Crested Butte, CO',
  currentUrl: '../images/butte-current.jpg',
  worstUrl: '../images/butte85.gif',
  bestUrl: '../images/butte26.gif'

}];

