Forests.Mountain = DS.Model.extend({
  name      		: DS.attr(),
  combinedUrl   : DS.attr(),
  scale         : DS.attr()

});

Forests.Mountain.FIXTURES = [{

  id: 1,
  name: 'Aspen, CO (Total forest cover)',
  combinedUrl: 'images/gif_local_aspen_combined.gif',
  scale: 'local',

}, {
  
  id: 2,
  name: 'Aspen, CO (Distribution of Aspen trees, Populus tremuloides only)',
  combinedUrl: 'images/gif_local_aspen_only.gif',
  scale: 'local',
  
}, {
  
  id: 3,
  name: 'Crested Butte, CO (Total forest cover)',
  combinedUrl: 'images/gif_local_butte_combined.gif',
  scale: 'local',
  
}, {

  id: 4,
  name: 'Tucson, AZ (Total forest cover)',
  combinedUrl: 'images/gif_local_lemmon_combined.gif',
  scale: 'local',

}, {

  id: 5,
  name: 'Region: southern Rocky Mountains, Mogollon Rim of northern Arizona, and Southern Utah',
  combinedUrl: 'images/gif_global_four_corners.gif',
  scale: 'global',

}];

