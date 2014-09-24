Forests.MapsController = Ember.ObjectController.extend({ 
  needs: ['plants'],
  ge: null,
  geocoder: null,
  folderCur: null,
  folder80: null,
  outerraFolder: null,
  networkLink: null,
  networkLink1: null,
  outerraLink: null,
  geocoder: null,
  selectedPlant: null,
  selectedRcp: null,
  selectedYear: null,
  selectedAddress: null,
  radioContent: [
    {label: 'Best', value: 'rcp26'},
    {label: 'Worst', value: 'rcp85'},
  ],
  
  plantsSelected: function() {
    console.log('plant selection changed ' + this.get('selectedPlant'));
    $('#rcp-group').css('visibility', 'visible');
    this.remindSubmit();
  }.observes('selectedPlant'),

  rcpSelected: function() {
    console.log('rcp selection has changed! ' + this.get('selectedRcp'));
    $('#year-group').css('visibility', 'visible');
    if (this.get('selectedRcp') === 'rcp85') {
      $('#rcp85-label').css('border', '2px solid #bf3604');
      $('#rcp26-label').css('border', '1px solid white');
    } else {
      $('#rcp26-label').css('border', '2px solid #bf3604');
      $('#rcp85-label').css('border', '1px solid white');
    }
    this.remindSubmit();
  }.observes('selectedRcp'),

  yearSelected: function() {
    console.log('year selection changed! ' + this.get('selectedYear'));
    $('#submit-group').css('visibility', 'visible');
  }.observes('selectedYear'),


    addressSelected: function() {
      console.log('address selection changed! ' + this.get('selectedAddress'));
    }.observes('selectedAddress'),

    kmlLoadComplete: function(kmlUrl) {
      console.log("Kml finished loading. Url is " + kmlUrl);
    },
   

  actions: {
    /*getMap: function() {
      console.log("Selected plant is: " + selectedPlant);
      console.log(this.get('isSelected') + ' ' + this.get('content.sci_name'));
      console.log(this.get('earthInstance'));
      
      this.get('earthInstance').getMap();
    },*/
    
    switchFuture: function() {
      console.log('Future');
      $('#future').css('border', '2px solid #bf3604');
      $('#current').css('border', '1px solid white');
      this.set('selectedYear', 'future');
      this.kmlFadeOut(folderCur);
      console.log("fading in folder80");
      this.kmlFadeIn(folder80);
    },

    switchCurrent: function() {
      console.log('Current');
      $('#current').css('border', '2px solid #bf3604');
      $('#future').css('border', '1px solid white');
      this.set('selectedYear', 'current');
      this.kmlFadeOut(folder80);
      console.log("fading in current");
      this.kmlFadeIn(folderCur);
    },
    
  },
    getUrl: function() {
      var Url = '/maxent_new/' + this.get('selectedRcp') + '/2011/' + this.get('content.sci_name');
      return Url;
    },
    

      
    kmlFadeIn: function(folder) {
      //get the initial opacity level for the overlay
      var kmlOpacity = folder.getOpacity();
      //increase the opacity at 10% increments until it is 100%
      var interval = setInterval(function() {
        if (kmlOpacity === 1.0) {
          clearInterval(interval);
        } else {
          kmlOpacity = Math.min(1.0, kmlOpacity + 0.1);
          folder.setOpacity(kmlOpacity);
        }
      }, 30);
    },

    kmlFadeOut: function(folder) {
      //get the folders initial opacity
      var kmlOpacity = folder.getOpacity();
      //decrease the folders opacity by 10% increments until it is 0
      var interval = setInterval(function() {
        if (kmlOpacity === 0.0) {
          clearInterval(interval);
        } else {
          kmlOpacity = Math.max(0.0, kmlOpacity - 0.1);
          folder.setOpacity(kmlOpacity);
        }
      }, 30);
    },
    
    
    
    
    
    addKmlFromUrl: function(kmlUrl, flyVar, folderVar) {
      console.log(ge.getPluginVersion());
      
      var link = ge.createLink('');
      link.setHref('http://scooby.iplantcollaborative.org/' + kmlUrl + '/doc.kml');
      console.log('http://scooby.iplantcollaborative.org/' + kmlUrl + '/doc.kml');

      switch (folderVar) { 
      case 1:
        console.log('folderVar = 1. continuing...');
        networkLink1.setLink(link);
        networkLink1.setFlyToView(flyVar);
        folder80.getFeatures().appendChild(networkLink1);
        break;
      case 99:
        //reserved for extraneous data (little maps and extinction maps
        outerraLink.setLink(link);
        outerraLink.setFlyToView(flyVar);
        outerraFolder.getFeatures().appendChild(outerraLink);
        break;
      default:
        console.log('no folderVar supplied. Continuing...');
        networkLink.setLink(link);
        networkLink.setFlyToView(flyVar);
        folderCur.getFeatures().appendChild(networkLink);
      }
      
    },

    addKmzFromUrl: function(kmzUrl) {
      var link = ge.createLink('');
      link.setHref('http://scooby.iplantcollaborative.org/' + kmzUrl + '.kmz');
      console.log("Loading kmz from " + kmzUrl);
      console.log(link);
      //outerraLink.setLink(link);
      //outerraFolder.getFeatures().appendChild(outerraLink);
    },

    removeLayers: function() {
      var folders = [folderCur, folder80, outerraFolder];
      var networkLinks = [networkLink, networkLink1, outerraLink];
      console.log("Clearing previous layers...");
      for (var i = 0; i < folders.length; i++) {
        console.log(folders[i]);
        console.log(networkLinks[i]);
        console.log("Folder length is: " + folders[i].getFeatures().getChildNodes().getLength());
        if (folders[i].getFeatures().getChildNodes().getLength() > 0) {
          folders[i].getFeatures().removeChild(networkLinks[i]);
        } else {
          console.log("No layers to remove from folder. Continuing...");
      }
      } 
      
    },
    
    pulseObject: function(varname) {
      $(String(varname)).removeClass('pulse');
      setTimeout(
          function() {
            console.log('Pulsing ' + varname);
            $(String(varname)).addClass('pulse');}, 1);
    },
    
    remind: function(varname) {
      $(String(varname)).removeClass('pulseOnce');
      setTimeout(
          function() {
            console.log('PulseOnce ' + varname);
            $(String(varname)).addClass('pulseOnce');}, 1);
    },

    remindSubmit: function() {
      if (this.get('selectedYear') !== null) {
        this.pulseObject('#submit-desc');
      }
    },
            

    switchLayer: function() {
      var rcp = this.get('selectedRcp');
      var plant = this.get('selectedPlant');
      var years = ['2011', '2081'];
      var year = this.get('selectedYear');
      var urls = [];
      var counter = 0;
     // var folderCur = this.get('folderCur');
     // var folder80 = this.get('folder80');
      //make hash to validate that rcp, plant and year have values
      var reqObj = {};
      reqObj['plant'] = plant;
      reqObj['rcp'] = rcp;
      reqObj['year'] = year;
      
      for ( var k in reqObj) {
        //check that rcp and plant have been selected 
        var varname = '#'+k+'-desc';
        if (reqObj[k] === null) {
          console.log(varname + " has a null value");
          this.pulseObject(varname);
          
        } else {
          console.log('Varname is '+ varname + reqObj[k]);
          //count number of variables with values
          counter = counter + 1;
        }
      };
      console.log("counter is " + counter);
      if (rcp !== null && plant !== null) {
        console.log("Selected plant is: " + plant);
        console.log("Checking current folder...");
        console.log(folderCur);
        console.log(folderCur.getFeatures().getChildNodes().getLength());
        console.log(folder80.getFeatures().getChildNodes().getLength());
        this.removeLayers();
        for (var i=0; i<years.length; i++) {
          urls.push('tiled/' + rcp +'/'+ years[i] +'/' + plant);
          console.log(urls[i]);
          this.addKmlFromUrl(urls[i], false, i);
        }
        console.log('layers loaded.');
        var outerraUrl = 'outerra/' + rcp;
        console.log('OuterraUrl is ' + 'http://scooby.iplantcollaborative.org/'+outerraUrl+'.kmz');
        this.addKmzFromUrl(outerraUrl);
      } else {
        console.log('Missing required variables');
        console.log(Boolean(counter > 1));
      }
      },


    geocode: function() {
      console.log(geocoder);
      geocoder.geocode({
        'address': this.get('selectedAddress')}, function(results, status) {
          console.log('Geocoding...');
          if (status == google.maps.GeocoderStatus.OK) {
            //do something with the result like flying into it
            var point = results[0].geometry.location;
            var lookat = ge.createLookAt('');
            lookat.set(point.lat(), point.lng(), 100, ge.ALTITUDE_RELATIVE_TO_GROUND, 0, 0, 10000);
          } else {
            alert("Geocoding error: " + status);
          }
        });
    },
    
    



});
