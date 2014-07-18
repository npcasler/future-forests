Forests.TutorialController = Ember.ObjectController.extend({
  needs: ['plants'],
  ge: null,
  selectedRcp: null,
  selectedPlant: null,
  selectedYear: null,
  radioContent: [
    {label: 'Best', value: 'rcp26'},
    {label: 'Worst', value: 'rcp85'},
  ],
  plantsSelected: function() {
    console.log('plants selection changed!');
    $('#rcp-group').css('visibility', 'visible');
  }.observes('selectedPlant'),

  rcpSelected: function() {
    console.log('rcp selection changed! ' + this.get('selectedRcp') );
    $('#year-group').css('visibility', 'visible');
    if  (this.get('selectedRcp') === 'rcp85') {
    $('#rcp85-label').css('border', '2px solid #bf3604');
    
      $('#rcp26-label').css('border', 'none');
    } else {
     $('#rcp26-label').css('border', '2px solid #bf3604');
      $('#rcp85-label').css('border', 'none');
   }
  }.observes('selectedRcp'),

  actions: {
    switchCurrent: function() {
      console.log('Current');
      $('#current').css('border', '2px solid #bf3604');
      $('#future').css('border', 'none');



    },
    switchFuture: function() {
      console.log('Future');
      $('#future').css('border', '2px solid #bf3604');
      $('#current').css('border', 'none');
      
    },
  }
  

});
