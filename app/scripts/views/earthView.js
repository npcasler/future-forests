Forests.EarthView = Ember.View.extend({
  tagName: '',
  templateName: 'earth',

  didInsertElement: function (){
    //var BV = new $.BigVideo({container: $('.screen')});
    //BV.init();
    //BV.show($('#screen-earth').attr('data-video'),{ambient:true});
   // this.get('controller').startGoogle();
    google.earth.createInstance('map3d', this.initCB, this.failureCB);
    geocoder = this.get('controller').get('geocoder');
    ge = this.get('controller').get('ge');
    folderCur = this.get('controller').get('folderCur');
    folder80 = this.get('controller').get('folder80');
    networkLink = this.get('controller').get('networkLink');
    networkLink80 = this.get('controller').get('networkLink80');
      
    geocoder = new window.google.maps.Geocoder();
  },

  initCB: function(instance) {
    //initialize the google earth instance
    
    ge = instance;
    geocoder = new window.google.maps.Geocoder(); //v3 geocoder
    ge.getWindow().setVisibility(true);

    //Add navigation controls
    ge.getNavigationControl().setVisibility(ge.VISIBILITY_SHOW);
    ge.getNavigationControl().getScreenXY().setXUnits(ge.UNITS_INSET_PIXELS);
    ge.getNavigationControl().getScreenXY().setYUnits(ge.UNITS_INSET_PIXELS);
    //add reference layers
    ge.getLayerRoot().enableLayerById(ge.LAYER_BORDERS, true);
    ge.getLayerRoot().enableLayerById(ge.LAYER_TERRAIN, true);
    ge.getOptions().setAtmosphereVisibility(true);

    //center the map
    var lookAt = ge.createLookAt('');
    lookAt.setLatitude(38.20935609422089);
    lookAt.setLongitude(-111.3985201676668);
    lookAt.setRange(5000000.0);
    ge.getView().setAbstractView(lookAt);
    //create folders for the various maps to allow for independent opacity values
    
    folderCur = ge.createFolder('');
    folder80  = ge.createFolder('');

    //add the networkLinks to load the maps into Google Earth
    networkLink = ge.createNetworkLink('');
    networkLink1 = ge.createNetworkLink('');

    //append folders to GE instance
    ge.getFeatures().appendChild(folderCur);
    ge.getFeatures().appendChild(folder80);

    //set folder opacity
    activeFolder = folderCur;
    folder80.setOpacity(0);
    console.log('Loading Maps for Google Earth');
    this.get('controller').addKmlFromUrl('maxent_new/rcp26/2011/abies_lasiocarpa', true, 0);
    this.get('controller').addKmlFromUrl('maxent_new/rcp26/2081/abies_lasiocarpa', true, 1);
  },

  failureCB: function(errorCode) {
    alert('There was an error loading the Google Earth Plugin: ' + errorCode);
  },

  

  actions: {

    geocode: function(address)  {
      
      geocoder.geocode({
        'address': address
      }, function(results, status) {
        console.log('Geocoding...');
        if (status == google.maps.GeocoderStatus.OK) {
          //do something with the result like flying in to it
          var point = results[0].geometry.location;
          var lookat = ge.createLookAt('');
          lookat.set(point.lat(), point.lng(), 100, ge.ALTITUDE_RELATIVE_TO_GROUND, 0, 0, 4000);
          ge.getView().setAbstractView(lookat);
        } else {
          alert("Geocoding error: " + status);
        }
      });
    },

    
    getMap: function() {
      console.log('Get Map has been called');
      //console.log(this.get('controller').toString()); 
      //var kmlUrl = this.get('controller').getUrl();
      //var kmlUrl = 'maxout_new/'+ this.get('isSelected') + '/2011/' + this.get('category.value');   
      //console.log(kmlUrl);
      //console.log(ge);
      this.get('controller').switchLayer();
      //this.get('controller').addKmlFromUrl(kmlUrl, 1, 0);
      console.log('Calling maps for rcp');
    },



  },

    
    
  
});

