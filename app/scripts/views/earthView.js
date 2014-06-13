Forests.EarthView = Ember.View.extend({
  classNames: 'wrapper',
  ge: null,
  didInsertElement: function (){
    var BV = new $.BigVideo({container: $('.screen')});
    BV.init();
    BV.show($('#screen-1').attr('data-video'),{ambient:true});

    google.earth.createInstance('map3d', this.initCB, this.failureCB);
    
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
    alert('There was an error loading the Google Earth Plugin: ' + errorCode);
  }
    
    
  
});

