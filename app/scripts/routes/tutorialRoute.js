Forests.TutorialRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    this._super(controller, model);
    this.controllerFor('plants').set('content', this.store.find('plant'));
  }
});
