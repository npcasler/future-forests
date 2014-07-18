Forests.MapsView = Ember.View.extend({
  classNames: 'wrapper',
  didInsertElement: function() {
    console.log('DidInsertElement has been called');
    var BV = new $.BigVideo({container: $('.screen')});
    BV.init();
    BV.show($('#screen-maps').attr('data-video'),{ambient:true});
  }
});
