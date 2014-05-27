Forests.User = DS.Model.extend({
  name      : DS.attr(),
  email     : DS.attr(),
  bio       : DS.attr(),
  avatarUrl : DS.attr(),
  creationDate : DS.attr()
});

Forests.User.FIXTURES = [{
  id: 1,
  name: 'Sponge Bob',
  email: 'bob@sponge.com',
  bio: 'Lorem ispum',
  avatarUrl: '../images/meadow.JPG',
  creationDate: 'Mon, 26 Aug 2013 20:23:43 GMT'
},{
  id: 2,
  name: 'John David',
  email: 'john@david.com',
  bio: 'Lorem Ispum',
  avatarUrl: '../images/dead_aspen.jpg',
  creationDate: 'Fri, 07 Aug 2013 10:10:10 GMT'
}];
