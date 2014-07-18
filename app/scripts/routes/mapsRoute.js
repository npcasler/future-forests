Forests.MapsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('map');
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    this.controllerFor('plants').set('content', this.store.find('plant'));
  }

});
