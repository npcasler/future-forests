Forests.Slide = DS.Model.extend({
  title         : DS.attr(),
  content       : DS.attr(),
  photoUrl      : DS.attr(),
  classId       : DS.attr()
});

Forests.Slide.FIXTURES = [{

  id: 1,
  title: 'home',
  content: 'Lorem Ipsum',
  photoUrl: '../images/fall_aspens.jpg',
  classId: '#home'
}, {
  id: 2,
  title: 'page-forecasts',
  content: 'Lorem Ispum',
  photoUrl: '../images/fall_aspens.jpg',
  classId: '#page-forecasts'
}, {
  id: 3,
  title: 'page-climate-change',
  content: 'Lorem Ispum',
  photoUrl: '../images/dead_trees.jpg',
  classId: '#page-climate-change'
}, {
  id: 4,
  title: 'page-about',
  content: 'Loremn Ispum',
  photoUrl: '../images/aspen_forest.jpg',
  classId: '#page-about'
}, {
  id: 5,
  title: 'page-methods',
  content: 'Lorem Ispum',
  photoUrl: '../images/new_growth.jpg',
  classId: '#page-methods'
}, {
  id: 6,
  title: 'page-references',
  content: 'Lorem Ispum',
  photoUrl: '../images/dead_trees_with_plane.jpg',
  classId: '#page-references'
}];
