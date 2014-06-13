Forests.WelcomeView = Ember.View.extend({
  classNames: 'wrapper',
  activate: function () {
    var BV = new $.BigVideo({container: $('.screen')});
    BV.init();
    BV.show($('#screen-welcome').attr('data-video'),{ambient:true});
  }
});
