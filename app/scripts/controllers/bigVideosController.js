Forests.BigVideosController = Ember.ArrayController.extend({
  model: function() {
    return this.store.find('bigVideo');
  }
});
