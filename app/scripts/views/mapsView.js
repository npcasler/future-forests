Forests.MapsView = Ember.View.extend({
  classNames: 'wrapper',
  willInsertElement: function() {
    console.log('WillInsertElement has been called');
    console.log('Clearing map variable');
    this.get('controller').set('selectedPlant', null);
    this.get('controller').set('selectedRcp', null);
    this.get('controller').set('selectedYear', null);
    this.get('controller').set('myTimer', null);
    this.get('controller').set('isSlider', false);
    console.log("Rcp is "+ this.get('controller').get('selectedRcp'));
    //var BV = new $.BigVideo({container: $('.screen')});
    //BV.init();
    //BV.show($('#screen-maps').attr('data-video'),{ambient:true});
  },
  actions: {
    geocode: function() {
      console.log('MapsView.geocode has been called.');
      console.log(this.get('parentView'));
    }}
});
