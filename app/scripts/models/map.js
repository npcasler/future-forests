Forests.Map = DS.Model.extend({
  rcp       : DS.attr(),
  plant     : DS.attr(),
  year      : DS.attr()
});

Forests.Map.FIXTURES = [{

  id: 1,
  rcp: 'rcp26',
  plant: 'abies_lasiocarpa',
  year: '2011'
}, {
  id: 2,
  rcp: 'rcp26',
  plant: 'abies_lasiocarpa',
  year: '2081'
}, {
  id: 3,
  rcp: 'rcp85',
  plant: 'abies_lasiocarpa',
  year: '2011'
}, {
  id: 4,
  rcp: 'rcp85',
  plant: 'abies_lasiocarpa',
  year: '2081'
}, {
  id: 5,
  rcp: 'rcp26',
  plant: 'juniperus_scopulroum',
  year: '2011'
}, {
  id: 6,
  rcp: 'rcp26',
  plant: 'juniperus_scopulorum',
  year: '2081',
}, {
  id: 7,
  rcp: 'rcp85',
  plant: 'juniperus_scopulorum',
  year: '2011'
}, {
  id: 8,
  rcp: 'rcp85',
  plant: 'juniperus_scopulorum',
  year: '2081',
}, {
  id: 9,
  rcp: 'rcp26',
  plant: 'picea_engelmannii',
  year: '2011',
}, {
  id: 10,
  rcp: 'rcp26',
  plant: 'picea_engelmannii',
  year: '2081',
}, {
  id: 11,
  rcp: 'rcp85',
  plant: 'picea_engelmannii',
  year: '2011'
}, { 
  id: 12,
  rcp: 'rcp85',
  plant: 'picea_engelmannii',
  year: '2081'
}];
