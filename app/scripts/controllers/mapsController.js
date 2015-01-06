Forests.MapsController = Ember.ObjectController.extend({ 
  needs: ['plants'],
  ge: null,
  geocoder: null,
  folder1: null,
  folder2: null,
  folder3: null,
  folder4: null,
  folder5: null,
  folder6: null,
  folder7: null,
  folder8: null,
  outerraFolder: null,
  networkLink1: null,
  networkLink2: null,
  networkLink3: null,
  networkLink4: null,
  networkLink5: null,
  networkLink6: null,
  networkLink7: null,
  networkLink8: null,
  outerraLink: null,
  selectedPlant: null,
  selectedRcp: null,
  selectedYear: null,
  selectedAddress: null,
  myTimer: null,
  isSlider: false,
  mapIndex: 0,
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
    $('#slider-control').css('visibility', 'visible');
    
  }.observes('selectedYear'), 

    addressSelected: function() {
      console.log('address selection changed! ' + this.get('selectedAddress'));
    }.observes('selectedAddress'),
   
    timeChanged: function() {
      console.log('MapIndex is ' + this.get('mapIndex'));
      var uiText = this.get('mapIndex')+ 1;
      console.log("uiText is " + uiText);
      $('#period').text('20'+ uiText + '1');
      this.switchTime();
     // this.switchTime();
    }.observes('mapIndex'),
    
    sliderOpen: function() {
      if (this.get('isSlider')) {
        var uiText = this.get('mapIndex') + 1;
        $('#period').text('20'+ uiText + 1);
        console.log('Slider opened');
        $('#year-group').css('display', 'none');
        $('#slider-group').css('display', 'block');
        $('#animate-group').css('visibility', 'visible');
        this.switchLayer();

      } else {
        this.set('mapIndex', 0);
        console.log('slider Closed');
        $('#slider-group').css('display', 'none');
        $('#animate-group').css('visibility', 'hidden');
        $('#year-group').css('display', 'inline-block');
        this.switchAnimate(false);
        this.switchLayer()
      }
     
    }.observes('isSlider'),

    animateMaps: function() {
     /* if (this.get('isAnimated')) {
        var self = this;
        this.set('myTimer',null);
        console.log('Animating maps...');
        this.set('myTimer', setInterval(function() {
          self.cycleLayers();
          console.log('Animated');
        }, 1200));
        
      } else {
        console.log('Stopping animation');
        clearInterval(this.get('myTimer'));
      }*/
      this.switchAnimate(this.get('isAnimated'));
    }.observes('isAnimated'),

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
      
      console.log("Future opacity is "+ folders[1].getOpacity());
      $('#future').css('border', '2px solid #bf3604');
      $('#current').css('border', '1px solid white');
      this.set('selectedYear', 'future');
      this.kmlFadeOut(folders[0]);
      console.log("fading in folder8");
      this.kmlFadeIn(folders[1]);
      console.log("Future opacity is "+ folders[1].getOpacity());
      
    },

    switchCurrent: function() {
      console.log('Current opacity is '+ folders[0].getOpacity());
      $('#current').css('border', '2px solid #bf3604');
      $('#future').css('border', '1px solid white');
      this.set('selectedYear', 'current');
      this.kmlFadeOut(folders[1]);
      console.log("fading in current");
      //this.kmlFadeIn(folder1);
      this.kmlFadeIn(folders[0]);
      console.log('Current opacity is '+ folders[0].getOpacity());
    }, 
 
    getUrl: function() {
      var Url = '/maxent/' + this.get('selectedRcp') + '/2011/' + this.get('content.sci_name');
      return Url;
    },

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
      /*case 1:
        console.log('folderVar = 1. continuing...');
        networkLink1.setLink(link);
        networkLink1.setFlyToView(flyVar);
        folder80.getFeatures().appendChild(networkLink1);
        break;*/
      case 99:
        //reserved for extraneous data (little maps and extinction maps
        outerraLink.setLink(link);
        outerraLink.setFlyToView(flyVar);
        outerraFolder.getFeatures().appendChild(outerraLink);
        break;
      default:
        console.log('no folderVar supplied. Continuing...');
        var folderIndex = folderVar;
        console.log("Folder index is " +folderIndex);
        links[folderIndex].setLink(link);
        links[folderIndex].setFlyToView(flyVar);
        folders[folderIndex].getFeatures().appendChild(links[folderIndex]);
      }
      
    },

    addKmzFromUrl: function(kmzUrl) {
      var link = ge.createLink('');
      link.setHref('http://scooby.iplantcollaborative.org/' + kmzUrl + '.kml');
      console.log("Loading kmz from " + kmzUrl);
      console.log(link);
      outerraLink.setLink(link);
      outerraFolder.getFeatures().appendChild(outerraLink);
    },

    removeLayers: function() {
      
      
      console.log("Clearing previous layers...");
      for (var i = 0; i < folders.length; i++) {
        console.log(folders[i]);
        console.log(links[i]);
        console.log("Folder length is: " + folders[i].getFeatures().getChildNodes().getLength());
        if (folders[i].getFeatures().getChildNodes().getLength() > 0) {
          folders[i].getFeatures().removeChild(links[i]);
          console.log('Ready to clear outerra layers..');
          //Clear outerra layers as well
          if (outerraFolder.getFeatures().getChildNodes().getLength() > 0) {
            outerraFolder.getFeatures().removeChild(outerraLink);
            console.log('..outerra layers cleared');
          }
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
        console.log(folders[0]);
        console.log(folders[0].getFeatures().getChildNodes().getLength());
        console.log(folders[7].getFeatures().getChildNodes().getLength());
        console.log('Removing layers');
        this.removeLayers();
        if (this.get('isSlider') == true) {
          years = ['2011' , '2021', '2031', '2041', '2051', '2061', '2071', '2081'];
        } else {
          years = ['2011', '2081'];
        }
          for (var i=0; i<years.length; i++) {
            urls.push('maxent/' + rcp +'/'+ years[i] +'/' + plant);
            console.log("folderIndex is "+ i + "Url is "+ urls[i]);
            this.addKmlFromUrl(urls[i], false, i);
          }
        console.log('layers loaded.');
        var outerraUrl = 'outerra/' + rcp;
        console.log('OuterraUrl is ' + 'http://scooby.iplantcollaborative.org/'+outerraUrl+'.kml');
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
          console.log('MapsController called geocode');
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
    
    switchTime: function() {
      console.log('SwitchTime() has been called by slider');
      var timeVar = this.mapIndex;
      
      this.activeFolder = folders[this.mapIndex];

      for (var i = 0; i < folders.length; i++) {

        if (i === this.mapIndex) {
            console.log('Fading in folder' + i);
            //activeFolder = folders[i];
            folders[i].setOpacity(1);

        } else if (folders[i].getOpacity() !== 0) {
          console.log("opacity is " +folders[i].getOpacity());
            console.log("Fading out folder"+ i);
            //this.kmlFadeOut(folders[i]);
            folders[i].setOpacity(0);
        } else {
          folders[i].setOpacity(0);
        }
      }
      console.log("Time is " +timeVar);
    },
    
    cycleLayers: function() {
      var ts = $('.slider');
      var map_index = this.get('mapIndex');
      if (map_index == 7) {
        ts.slider('option', 'value', 0);
        ts.slider('option', 'slide').call(ts, null, {handle: $('.ui-slider-handle', ts), value: 0});
      } else {
        ts.slider('value', map_index + 1);
        ts.slider('option', 'slide').call(ts, null, {handle: $('.ui-slider-handle', ts), value: map_index + 1});
      }},

    
    switchAnimate: function(value) {
      if (value) {
        var self = this;
        this.set('myTimer',null);
        //Set cycleLayers to run every 1000ms
        console.log('Animating maps...');
        this.set('myTimer', setInterval(function() {
          self.cycleLayers();
          console.log('Animated');
        }, 1000));
        
      } else {
        console.log('Stopping animation');
        clearInterval(this.get('myTimer'));
      }
    },


  
});
