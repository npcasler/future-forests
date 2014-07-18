Forests.WelcomeView = Ember.View.extend({
  classNames: 'wrapper',
  didInsertElement: function () {
    console.log('DidInsertElement has been called');
    console.log(this.get('controller.controllers.application').get('selectedScreen'));
   // var BV = new $.BigVideo({container: $('.screen')});
    var BV =this.get('controller.controllers.application').get('BV');
    //BV = new $.BigVideo({container: $('.screen')});
    //console.log(BV);
    //BV.getPlayer().pause();  
    //BV.init();
    //BV.show($('#screen-welcome').attr('data-video'),{ambient:true});
  }
});
