Forests.Temp = DS.Model.extend({
  title       : DS.attr(),
  value       : DS.attr(),
  icon        : DS.attr()
});

Forests.Temp.FIXTURES = [{
  id: 1,
  title: 'Best',
  value: 'rcp26',
  icon: 'tempLow'
}, {
  id: 2,
  title: 'Stable',
  value: 'rcp45',
  icon: 'tempMed'
}, {
  id: 3,
  title: 'Worst',
  value: 'rcp85',
  icon: 'tempHigh'
}];
