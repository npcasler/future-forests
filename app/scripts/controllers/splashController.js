Forests.SplashController = Ember.ObjectController.extend({
  actions: {
    gotToWelcome: function() {
      this.transitionTo('welcome');
    }
  }
});
