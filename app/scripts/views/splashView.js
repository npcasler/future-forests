Forests.SplashView = Ember.View.extend({
  click: function(evt) {
    this.get('controller').send('goToWelcome');
  }
});
