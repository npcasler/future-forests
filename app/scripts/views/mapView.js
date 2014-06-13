Forests.MapView = Ember.View.extend({
  classsName: 'wrapper',
  ge: null,
  geocoder: null,
  didInsertElement: function() {
    google.load("earth", "1", {
      "other_params": "sensor={true_or_false}"
    });

    google.load("maps", "3.6", {
      "other_params": 'sensor=false'
    });

    google.earth.createInstance('map3d', initCB, failureCB);
  },

  initCB: function(instance) {
    //initialize the google earth instance
    ge = instance;
    ge.getWindow().setVisibility(true);

    //Add navigation controls
    ge.getNavigationControl().setVisibility(ge.VISIBILITY_SHOW);
    ge.getNavigationControl().getScreenXY().setXUnits(ge.UNITS_INSET_PIXELS);
    ge.getNavigationControl().getScreenXY().setYUnits(ge.UNITS_INSET_PIXELS);

  },

  failureCB: function(errorCode) {
    alert('There was an error loading the page: ' + errorCode);
  }
});

