Forests.SplashRoute = Ember.Route.extend({
  enter: function() {
    var widthOrHeight = $(window).height() > $(window).width() ? 'width' : 'height';
    $('#splash').fadeIn();

    Ember.run.later(this, function() {
      $('#splash').fadeOut().detach();
      this.transitionToRoute('welcome');
    }, 1500);
  }
});
