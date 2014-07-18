Forests.BigVideo = DS.Model.extend({
  name          : DS.attr(),
  url           : DS.attr(),
  classId       : DS.attr()
});

Forests.BigVideo.FIXTURES = [
{
  id: 1,
  name: 'welcome',
  url: "http://player.vimeo.com/external/97766235.sd.mp4?s=3d37dd490730f09fbc73c57fa74a8dfc",
  classId: '#screen-welcome'
}, {
  id: 2,
  name: 'summary',
  url: "http://player.vimeo.com/external/97766233.sd.mp4?s=5df211c4da525ce8da33fddd981d52df",
  classId: '#screen-summary'
}, {
  id: 3,
  name: 'about',
  url: "http://player.vimeo.com/external/97766236.sd.mp4?s=eb1a390039ac1c84a54713d93c69cc25",
  classId: '#screen-about'
}, {
  id: 4,
  name: 'climate',
  url: "http://player.vimeo.com/external/97766234.sd.mp4?s=6bca03913cd9ec2ebf0be0682098e1e2",
  classId: '#screen-climate'
}, {
  id: 5,
  name: 'intro',
  url: "http://player.vimeo.com/external/97768757.sd.mp4?s=3b8caf7f9e96d4f5beb7b36f028946dc",
  classId: '#screen-intro'
}];
