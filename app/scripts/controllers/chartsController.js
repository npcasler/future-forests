Forests.ChartsController = Ember.ArrayController.extend({
  selectedChart: [],
  needs: ['headlines'],
  chartNames: 'null',
  chartContainer: 'null',
  pictureContainer: 'null',
  figureContainer: 'null',

  gainCharts: function() {
   return this.filterBy('change', 'gain');
  }.property('@each.change'),

  lossCharts: function() {
   return this.filterBy('change', 'loss');
  }.property('@each.change'),
 
  toggleSize: function(openVal) {
    console.log("openChart called.");
    //var chartId = headline.chartId;
    
    console.log("chartId is " + this.chartNames);
    
    console.log('containerId is ' + this.chartContainer);
    console.log($(this.chartContainer).css('max-height'));
   // $(containerID).css("max-height", $(containerID).css("max-height") === '0px' ? '3600px' : '0px');
    if (openVal) {
      console.log('Opening charts...');
      $(this.chartContainer).css("max-height", "3600px"); 
      console.log($(this.chartContainer).css('max-height'));
      $(window).scrollTo($(this.chartNames).offset().top -125, {duration: 'fast', easing: 'swing', offsetTop:''});
    } else {
      console.log('Closing charts..');
      $(this.chartContainer).css("max-height", "0px");
      $(this.chartContainer).css("overflow", "hidden");
      $(window).scrollTo($(this.chartNames).offset().top -125, {duration: 'fast', easing: 'swing', offsetTop:''});
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
      this.set('chartNames' ,'#' +chart.get('change') + '-names');
      this.set('chartContainer', '#' +chart.get('change') + '-container');
      this.set('pictureContainer', '#' + chart.get('change') + '-picture');
      this.set('figureContainer','#' + chart.get('change') + '-figure');
      console.log(this.pictureContainer);
      this.toggleSize(1);
      this.set('selectedChart', chart.get('name'));
      console.log(this.get('selectedChart'));
      console.log(chart.get('name'));
      console.log(chart.get('pictureUrl'));
      console.log(chart.get('figureUrl'));
      console.log('$("'+this.pictureContainer+'").attr("src","'+chart.get('pictureUrl')+'")');
      //$('#pictureContainer').attr('src', chart.get('pictureUrl')).stop(true,true).hide().fadeIn();
    // $(this.pictureContainer).css('opacity', 0);      

       $(this.pictureContainer).attr('src',chart.get('pictureUrl'));
    // $(this.pictureContainer).css('opacity',1);	
      console.log($(this.pictureContainer).attr('src'));
     // $('#figureContainer').attr('src', chart.get('figureUrl')).stop(true,true).hide().fadeIn(700);
            $(this.figureContainer).attr('src', chart.get('figureUrl'));
            
    }   
  },
  
  toggleChart: function () {
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
