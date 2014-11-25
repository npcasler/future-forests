Forests.MountainsRoute = Ember.Route.extend({
  model: function() {

   console.log('Mountains route hit');
  return this.store.find('mountain');

  }
});
