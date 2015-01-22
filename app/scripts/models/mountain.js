Forests.Mountain = DS.Model.extend({
  name      		: DS.attr(),
  combinedUrl   : DS.attr(),
  scale         : DS.attr(),
  detail        : DS.attr(),
  mountainTitle : DS.attr(),

});

Forests.Mountain.FIXTURES = [{

  id: 1,
  name: 'Aspen, CO (Total forest cover)',
  combinedUrl: 'images/gif_local_aspen_combined.gif',
  scale: 'local',
  mountainTitle: 'y',

}, {
  
  id: 2,
  name: 'Aspen, CO (Distribution of Aspen trees, Populus tremuloides only)',
  combinedUrl: 'images/gif_local_aspen_only.gif',
  scale: 'local',
  mountainTitle: 'y'
  
}, {
  
  id: 3,
  name: 'Crested Butte, CO (Total forest cover)',
  combinedUrl: 'images/gif_local_butte_combined.gif',
  scale: 'local',
  mountainTitle: 'y',
  
}, {

  id: 4,
  name: 'Tucson, AZ (Total forest cover)',
  combinedUrl: 'images/gif_local_lemmon_combined.gif',
  scale: 'local',
  mountainTitle: 'y',

}, {

  id: 5,
  name: 'VIEW 1: SOUTHERN ROCKY MOUNTAINS',
  combinedUrl: 'images/gif_global_four_corners.gif',
  scale: 'global',
  mountainTitle: 'y',
}, {

  id: 6,
  name: 'VIEW 2: CENTRAL ROCKY MOUNTAINS',
  combinedUrl: 'images/gif_central.gif',
  scale: 'global',

}];

