Forests.ChartsRoute = Ember.Route.extend({
  model: function() {

    console.log('Charts route hit');
    
    return this.store.find('chart');
  }
});

