Forests.MapsController = Ember.ObjectController.extend({ 
  needs: ['plants'],
  ge: null,
  folderCur: null,
  folder80: null,
  networkLink: null,
  networkLink1: null,
  geocoder: null,
  selectedPlant: null,
  selectedRcp: null,
  selectedYear: null,
  radioContent: [
    {label: 'Best', value: 'rcp26'},
    {label: 'Worst', value: 'rcp85'},
  ],
  
  plantsSelected: function() {
    console.log('plant selection changed ' + this.get('selectedPlant'));
  }.observes('selectedPlant'),

  rcpSelected: function() {
    console.log('rcp selection has changed! ' + this.get('selectedRcp'));
    if (this.get('selectedRcp') === 'rcp85') {
      $('#rcp85-label').css('border', '2px solid #bf3604');
      $('#rcp26-label').css('border', 'none');
    } else {
      $('#rcp26-label').css('border', '2px solid #bf3604');
      $('#rcp85-label').css('border', 'none');
    }
  }.observes('selectedRcp'),

  yearSelected: function() {
    console.log('year selection changed! ' + this.get('selectedYear'));
  }.observes('selectedYear'),
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
      $('#current').css('border', 'none');
      this.set('selectedYear', 'future');
      this.kmlFadeOut(folderCur);
      console.log("fading in folder80");
      this.kmlFadeIn(folder80);
    },

    switchCurrent: function() {
      console.log('Current');
      $('#current').css('border', '2px solid #bf3604');
      $('#future').css('border', 'none');
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
      console.log(ge);
      console.log(geocoder);
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
        networkLinkRef.setLink(link);
        networkLinkRef.setFlyToView(flyVar);
        folderRef.getFeatures().appendChild(networkLinkRef);
        break;
      default:
        console.log('no folderVar supplied. Continuing...');
        networkLink.setLink(link);
        networkLink.setFlyToView(flyVar);
        folderCur.getFeatures().appendChild(networkLink);
      }
    },

    removeLayers: function() {
      var folders = [folderCur, folder80];
      var networkLinks = [networkLink, networkLink1];
      console.log("Clearing previous layers...");
      for (var i = 0; i < folders.length; i++) {
        console.log(folders[i]);
        console.log(networkLinks[i]);
        console.log("Folder length is: " + folders[i].getFeatures().getChildNodes().getLength());
        if (folders[i].getFeatures().getChildNodes().getLength() > 0) {
          folderCur.getFeatures().removeChild(networkLinks[i]);
        } else {
          console.log("No layers to remove from folder. Continuing...");
      }
      } 
      
    },

    switchLayer: function() {
      var rcp = this.get('selectedRcp');
      var plant = this.get('selectedPlant');
      var years = ['2011', '2081'];
      var urls = [];
      if (plant === null) {
        console.log('No plant selected!');
        $('#plant-desc').addClass('pulse');
      } else {

      console.log("Selected plant is: " + plant);
      console.log(folderCur.getFeatures().getChildNodes().getLength());
      console.log(folder80.getFeatures().getChildNodes().getLength());
      this.removeLayers();
      for (var i=0; i<years.length; i++) {
        urls.push('tiled/' + rcp +'/'+ years[i] +'/' + plant);
        console.log(urls[i]);
        this.addKmlFromUrl(urls[i], false, i);
      }
      console.log('layers loaded.');
      }
    },
    



});
