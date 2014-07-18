Forests.PlantsController = Ember.ArrayController.extend({
  model: function() {
    return this.store.find('plant');
  }
});
