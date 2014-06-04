Forests.Plant = DS.Model.extend({
  name            : DS.attr(),
  sci_name        : DS.attr(),
});

Forests.Plant.FIXTURES = [{

  id: 1,
  name: 'Subalpine fir',
  sci_name: 'Abies lasiocarpa',
}, {
  id: 2,
  name: 'Rocky Mountain Juniper',
  sci_name: 'Juniperus scopulorum'
}, {
  id: 3,
  name: 'Engelmann spruce',
  sci_name: 'Picea engelmannii'
}, {
  id: 4,
  name: 'Lodgepole pine',
  sci_name: 'Pinus contorta'
}, {
  id: 5,
  name: 'Pinon pine',
  sci_name: 'Pinus edulis'
}, {
  id: 6,
  name: 'Ponderosa pine',
  sci_name: 'Pinus ponderosa'
}, {
  id: 7,
  name: 'Quaking aspen',
  sci_name: 'Populus tremuloides'
}, {
  id: 8,
  name: 'Douglas fir',
  sci_name: 'Pseudotsuga menziesii'
}, {
  id: 9,
  name: 'Gambel Oak',
  sci_name: 'Quercus gambelii'
}];

