Forests.ApplicationView = Ember.View.extend({
  classNames: ['full-height'],
  didInsertElement: function() { 
    var appBV = this.get('controller').get('BV');
    if (appBV === null) {
      console.log("appBV is null, initiating...");
      appBV = new $.BigVideo({container: $('.screen')});
      appBV.init();
      console.log("appBV is " +appBV);
      this.get('controller').set('BV', appBV);
      console.log("BV set to");
      console.log(this.get('controller').get('BV'));
    } else {
    console.log("application called bv as " + BV);
    }
    appBV.show($(this.get('controller').get('selectedScreen')).attr('data-video'), {ambient:true});
  }

});
