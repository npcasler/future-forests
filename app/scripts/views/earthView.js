Forests.EarthView = Ember.View.extend({
  tagName: '',
  templateName: 'earth',
  
  didInsertElement: function (){
    //var BV = new $.BigVideo({container: $('.screen')});
    //BV.init();
    //BV.show($('#screen-earth').attr('data-video'),{ambient:true});
   // this.get('controller').startGoogle();
    google.earth.createInstance('map3d', this.initCB, this.failureCB);
    
    ge = this.get('controller').get('ge');
    geocoder = this.get('controller').get('geocoder');
    folderCur = this.get('controller').get('folderCur');
    folder80 = this.get('controller').get('folder80');
    outerraFolder = this.get('controller').get('outerraFolder');
    networkLink = this.get('controller').get('networkLink');
    networkLink80 = this.get('controller').get('networkLink80');
    outerraLink = this.get('controller').get('outerraLink');
    selectedAddress = this.get('controller').get('selectedAddress');      
    
    
  },

  initCB: function(instance) {
    //initialize the google earth instance
    console.log("initCB called. Initializing Google Earth");
    ge = instance;
   // geocoder =  this.get('controller').get('geocoder');
    geocoder = new window.google.maps.Geocoder(); //v3 geocoder
    console.log('Geocoder initialized...');
    console.log(geocoder);
    console.log('Geocoding...' + selectedAddress);
    //CHECK INTO LOADING THE MapsController.geocoder... for some reason it is returning type errors...
    //this.set('controller.geocoder', geocoder);
    ge.getWindow().setVisibility(true);
    console.log("Adding Navigation controls...");
    //Add navigation controls
    ge.getNavigationControl().setVisibility(ge.VISIBILITY_SHOW);
    ge.getNavigationControl().getScreenXY().setXUnits(ge.UNITS_INSET_PIXELS);
    ge.getNavigationControl().getScreenXY().setYUnits(ge.UNITS_INSET_PIXELS);
    //add reference layers
    console.log("Adding reference layers...");
    ge.getLayerRoot().enableLayerById(ge.LAYER_BORDERS, true);
    ge.getLayerRoot().enableLayerById(ge.LAYER_TERRAIN, true);
    ge.getLayerRoot().enableLayerById(ge.LAYER_BUILDINGS, true);
    ge.getOptions().setAtmosphereVisibility(true);

    //center the map
    var lookAt = ge.createLookAt('');
    lookAt.setLatitude(38.20935609422089);
    lookAt.setLongitude(-111.3985201676668);
    lookAt.setRange(5000000.0);
    console.log('Setting view...');
    ge.getView().setAbstractView(lookAt);
    //create folders for the various maps to allow for independent opacity values
    
    console.log("Initializing Kml folders...");
    folderCur = ge.createFolder('');
    folder80  = ge.createFolder('');
    outerraFolder = ge.createFolder('');

    //add the networkLinks to load the maps into Google Earth
    console.log("Creating network links...");
    networkLink = ge.createNetworkLink('');
    networkLink1 = ge.createNetworkLink('');
    outerraLink = ge.createNetworkLink('');

    //append folders to GE instance
    console.log("Adding folders to instance...");
    ge.getFeatures().appendChild(folderCur);
    ge.getFeatures().appendChild(folder80);
    ge.getFeatures().appendChild(outerraFolder);

    //set folder opacity
    activeFolder = folderCur;
    folder80.setOpacity(0);
    console.log('Loading Maps for Google Earth');
//    this.get('controller').addKmlFromUrl('maxent_new/rcp26/2011/abies_lasiocarpa', true, 0);
  //  this.get('controller').addKmlFromUrl('maxent_new/rcp26/2081/abies_lasiocarpa', true, 1);
  },

  failureCB: function(errorCode) {
    alert('There was an error loading the Google Earth Plugin: ' + errorCode);
  },

  
    geocodeAddress: function()  {
      console.log('Geocoding...' + this.get('controller').get('selectedAddress'));
      console.log(geocoder);
      geocoder.geocode({
        'address': this.get('controller').get('selectedAddress')
      }, function(results, status) {
        
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

    blurMap: function(blur) {
      console.log('Blurring window for layer load...');
      if (Boolean(blur)) {
        //ge.getWindow().setVisibility(false);
        $('#map-submit').addClass('has-spinner');
      } else {
        //ge.getWindow().setVisibility(true);
        $('#map-submit').removeClass('has-spinner');
      }
    },

  actions: {

    geocode: function()  {
      console.log("Calling geocodeAddress");
      this.geocodeAddress();
      /*console.log('Geocoding...' + this.get('controller').get('selectedAddress'));
      geocoder = this.get('controller').get('geocoder');
      console.log(geocoder);
      geocoder.geocode({
        'address': this.get('controller').get('selectedAddress')
      }, function(results, status) {
        
        if (status == google.maps.GeocoderStatus.OK) {
          //do something with the result like flying in to it
          var point = results[0].geometry.location;
          var lookat = ge.createLookAt('');
          lookat.set(point.lat(), point.lng(), 100, ge.ALTITUDE_RELATIVE_TO_GROUND, 0, 0, 4000);
          ge.getView().setAbstractView(lookat);
        } else {
          alert("Geocoding error: " + status);
        }
      });*/
    },

    
    getMap: function() {
      console.log('Get Map has been called');
      this.blurMap(true);
      //console.log(this.get('controller').toString()); 
      //var kmlUrl = this.get('controller').getUrl();
      //var kmlUrl = 'maxout_new/'+ this.get('isSelected') + '/2011/' + this.get('category.value');   
      //console.log(kmlUrl);
      //console.log(ge);
      this.get('controller').switchLayer();
      
      //this.get('controller').addKmlFromUrl(kmlUrl, 1, 0);
      console.log('Calling maps for rcp');
      this.blurMap(false);
    },



  },

    
    
  
});

