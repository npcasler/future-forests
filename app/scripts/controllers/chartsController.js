Forests.ChartsController = Ember.ArrayController.extend({
  selectedChart: [],
  
  actions: {
    getChart: function(chart) {
      console.log('GetChart called');
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
      $('#figureContainer').fadeOut(200, function() {
            $('#figureContainer').attr('src', chart.get('figureUrl'));
            }).fadeIn(200);
    }   
  }
});
