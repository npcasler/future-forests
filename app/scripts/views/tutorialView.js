Forests.TutorialView = Ember.View.extend({
  classNames: 'wrapper',
  didInsertElement: function() {
    $('.btn-text').click(function() {
      $(this).toggleClass('active');
      console.log($(this));
      console.log('Activated!');
    });
  }
});
