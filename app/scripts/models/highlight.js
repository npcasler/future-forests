Forests.Highlight = DS.Model.extend({
  title         : DS.attr(),
  content       : DS.attr(),
  photoUrl      : DS.attr(),
  classId       : DS.attr()
});

Forests.Highlight.FIXTURES = [{

  id: 1,
  title: 'Summary',
  content: 'Future Forests is an effort to see effects of climate change may have on our forests in the coming years',
  photoUrl: '../images/fall_aspens.jpg',
  classId: 'summary'
}, {
  id: 2,
  title: 'Forecasts',
  content: 'Forecasts let us predict which areas may be most effected in the future',
  photoUrl: '../images/fall_aspens.jpg',
  classId: 'forecasts'
}, {
  id: 3,
  title: 'Climate Change',
  content: 'Climate Change is endangering delicate ecosystems all over the world',
  photoUrl: '../images/dead_trees.jpg',
  classId: 'climate-change'
}, {
  id: 4,
  title: 'About',
  content: 'This project is a cooperative effort on the behalf of ACES, the iPLant Collaborative and the University of Arizona.',
  photoUrl: '../images/aspen_forest.jpg',
  classId: 'about'
}, {
  id: 5,
  title: 'Methods',
  content: 'Need help not making this sound too technical',
  photoUrl: '../images/new_growth.jpg',
  classId: 'methods'
}, {
  id: 6,
  title: 'References',
  content: 'Lorem Ispum',
  photoUrl: '../images/dead_trees_with_plane.jpg',
  classId: 'references'
}];
