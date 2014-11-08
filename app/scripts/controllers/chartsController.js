Forests.ChartsController = Ember.ArrayController.extend({
  selectedChart: [],
 
  toggleSize: function(openVal) {
    console.log("openChart called.");
    
    var containerID = '#chartContainer';
    console.log($(containerID).css('max-height'));
   // $(containerID).css("max-height", $(containerID).css("max-height") === '0px' ? '3600px' : '0px');
    if (openVal) {
      console.log('Opening charts...');
      $(containerID).css("max-height", "3600px");
      $(window).scrollTo($('#chartNames'), {duration: 'fast', easing: 'ease'});
    } else {
      console.log('Closing charts..');
      $(containerID).css("max-height", "0px");
      $(containerID).css("overflow", "hidden");
      $(window).scrollTo($('#chartNames'), {duration: 'fast', easing: 'ease'});
   /* if ($(containerID).css('max-height') === '0px') {
      $('#pictureContainer').css('src', 'none');
      $('#figureContainer').css('src', 'none');
      $('#chartContainer').css('overflow', 'hidden');
      $('body').scrollTo($(containerID).offset().top - 125, {duration: 'slow', offsetTop: '200',  easing: 'swing'});
    } else {
      //$('body').scrollTo($(headline), {duration: 'slow', easing: 'swing'});*/
    }

  },
     
  actions: {
    getChart: function(chart) {
      console.log('GetChart called');
      this.toggleSize(1);
      this.set('selectedChart', chart.get('name'));
      console.log(this.get('selectChart'));
      console.log(chart.get('name'));
      console.log(chart.get('pictureUrl'));
      console.log(chart.get('figureUrl'));
      // $('#pictureContainer').attr('src', chart.get('pictureUrl')).stop(true,true).hide().fadeIn();
      $('#pictureContainer').fadeOut(50, function() {
            $('#pictureContainer').attr('src', chart.get('pictureUrl'));
             }).fadeIn(50);
     // $('#figureContainer').attr('src', chart.get('figureUrl')).stop(true,true).hide().fadeIn(700);
      $('#figureContainer').fadeOut(50, function() {
            $('#figureContainer').attr('src', chart.get('figureUrl'));
            }).fadeIn(200);
    }   
  },
  
  toggleChart: function() {
   /* console.log("openChart called.");
    
    var containerID = '#chartContainer';
    console.log($(containerID).css('max-height'));
    $(containerID).css("max-height", $(containerID).css("max-height") === '0px' ? '3600px' : '0px');
    if ($(containerID).css('max-height') === '0px') {
      $('#pictureContainer').css('src', 'none');
      $('#figureContainer').css('src', 'none');
      $('#chartContainer').css('overflow', 'hidden');
      $('body').scrollTo($(containerID).offset().top - 125, {duration: 'slow', offsetTop: '200',  easing: 'swing'});
    } else {
      //$('body').scrollTo($(headline), {duration: 'slow', easing: 'swing'});
    }*/
   this.toggleSize(0);

  },
});
