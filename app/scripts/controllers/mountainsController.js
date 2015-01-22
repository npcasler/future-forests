Forests.MountainsController = Ember.ArrayController.extend({
  selectedMountain: [],
  needs: ['headlines'],
  mountainNames: 'null',
  mountainContainer: 'null',
  combinedContainer: 'null',

  activeLink: function() {
    $('.btn-chart').click(
      function(highlight)
      {
        $('.btn-chart').removeClass('btn-chart-active');
        $(highlight.currentTarget).addClass('btn-chart-active');
      }
    );
  },

  localMountains: function () {
    return this.filterBy('scale', 'local');}.property('@each.scale'),

  globalMountains: function () {
    return this.filterBy('scale', 'global');}.property('@each.scale'),

 
  toggleSize: function(openVal) {
    console.log("openMountain called.");
    console.log("mountainId is " + this.mountainNames);
    console.log('containerId is ' + this.mountainContainer);
    console.log($(this.mountainContainer).css('max-height'));
    
    if (openVal) {
      console.log('Opening mountains...');
      $(this.mountainContainer).css("max-height", "3600px");
      console.log($(this.mountainContainer).css('max-height'));
      $(window).scrollTo($(this.mountainNames).offset().top -125, {duration: 'slow', easing: 'swing', offsetTop:''});
    } else {
      console.log('Closing mountains..');
      $(this.mountainContainer).css("max-height", "0px");
      
      $(window).scrollTo($(this.mountainNames).offset().top -300, {duration: 'slow', easing: 'swing', offsetTop:''});
    }

  },
     
  actions: {
    getMountains: function(mountain) {
      console.log('GetMountain called');
//      this.set('mountainNames','#aspen-names');
      this.set('mountainNames', '#' +mountain.get('scale') + '-names');
      this.set('mountainContainer', '#'+mountain.get('scale')+'-container');
      this.set('combinedContainer','#'+mountain.get('scale')+'-combined');
      console.log(this.combinedContainer);
      this.toggleSize(1);
      console.log(this.get('selectedMountain'));
      console.log(mountain.get('name'));
      console.log(mountain.get('detail'));
      console.log(mountain.get('combinedUrl'));
      console.log(mountain.get('mountainTitle'));
      this.set('mountainBest', '#'+ mountain.get('scale')+'-best');
      this.set('mountainWorst', '#'+mountain.get('scale')+'-worst');
      console.log('MountainBest is '+ this.mountainBest);
      console.log('MountainWorst is ' + this.mountainWorst);
      if (mountain.get('mountainTitle') === 'y') {
        $(this.mountainBest).text('Best case greenhouse gas emission scenario');
        $(this.mountainWorst).text('Worst case greenhouse gas emission scenario');
      } else {
        $(this.mountainBest).text('');
        $(this.mountainWorst).text('');
      }
      console.log('$("'+this.mountainContainer+'").attr("src","'+mountain.get('combinedUrl')+'")');
      
      $(this.combinedContainer).attr('src',mountain.get('combinedUrl'));

 //      this.set('selectedMountain',mountain.get('name'));
       console.log($(this.combinedContainer).attr('src'));      
       
            
    }   
  },
  
  toggleMountain: function () {
    
   this.toggleSize(0);

  },
});
