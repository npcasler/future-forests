Forests.EarthController = Ember.ObjectController.extend({
  actions: {
    initCB: function(instance) {
      ge = instance;
      ge.getWindow().setVisibility(true);

    },
    failureCB: function(errorCode) {
      alert('There was an error loading the page: ' + errorCode);
    }
  }
});
 
