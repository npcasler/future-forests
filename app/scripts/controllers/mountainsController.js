Forests.MountainsController = Ember.ArrayController.extend({
  selectedMountain: [],
  needs: ['headlines'],
  mountainNames: 'null',
  mountainContainer: 'null',
  bestContainer: 'null',
  worstContainer: 'null',

 
  toggleSize: function(openVal) {
    console.log("openMountain called.");
    console.log("mountainId is " + this.mountainNames);
    console.log('containerId is ' + this.mountainContainer);
    console.log($(this.mountainContainer).css('max-height'));
    
    if (openVal) {
      console.log('Opening mountains...');
      $(this.mountainContainer).css("max-height", "3600px"); 
      console.log($(this.mountainContainer).css('max-height'));
      $(window).scrollTo($(this.mountainNames).offset().top -125, {duration: 'fast', easing: 'swing', offsetTop:''});
    } else {
      console.log('Closing mountains..');
      $(this.mountainContainer).css("max-height", "0px");
      $(this.mountainContainer).css("overflow", "hidden");
      $(window).scrollTo($(this.mountainNames).offset().top -125, {duration: 'fast', easing: 'swing', offsetTop:''});
    }

  },
     
  actions: {
    getMountains: function(mountain) {
      console.log('GetMountain called');
      this.set('mountainNames' ,'#' +mountain.get('') + '-names');
      this.set('mountainContainer', '#' +mountain.get('e') + '-container');
      this.set('bestContainer', '#' + mountain.get('') + '-best');
      this.set('worstContainer','#' + mountain.get('') + '-worst');
      console.log(this.worstContainer);
      this.toggleSize(1);
      this.set('selectedMountain', mountain.get('name'));
      console.log(this.get('selectedMountain'));
      console.log(mountain.get('name'));
      console.log(mountain.get('bestUrl'));
      console.log(mountain.get('worstUrl'));
      console.log('$("'+this.mountainContainer+'").attr("src","'+mountain.get('worstUrl')+'")');

       $(this.mountainContainer).attr('src',mountain.get('worstUrl'));
      console.log($(this.worstContainer).attr('src'));
            $(this.bestContainer).attr('src', mountain.get('figureUrl'));
            
    }   
  },
  
  toggleChart: function () {
    
   this.toggleSize(0);

  },
});
