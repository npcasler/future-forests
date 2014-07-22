Forests.PlantsController = Ember.ArrayController.extend({ 
  sortProperties: ['name'],
  sortAscending: true,
  model: function() {
    return this.store.find('plant');
  },
  
});
