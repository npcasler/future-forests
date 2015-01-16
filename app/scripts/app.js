var Forests = window.Forests = Ember.Application.createWithMixins({
  LOG_TRANSITIONS: true,
  LOG_VIEW_LOOKUP: true,
  LOG_ACTIVE_GENERATION: true,
  LOG_BINDINGS: true,
  LOG_STACKTRACE_ON_DEPRECATION: true,
  app_title: 'Forest Forecasts',
  init: function() {

    this.deferReadiness();
    this._super();
  }
});

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');

/*(function( $ ) {
  //Init Skrollr
  var s = skrollr.init({
    render: function(data){
      //debuggiong - Log the current scroll position
      console.log(data.curTop);
    }
  });
}) ( jQuery );
*/
//(function( $ ) {
  //init bigVideo
  //
//  }) (jQuery);
 
Forests.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('welcome');
    //  this.transitionTo('splash');
  }

});
/*
Ember.View.reopen({
  didInsertElement: function() {
    this._super();
    Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
  },

  afterRenderEvent: function() {
    alert(this.get('videoDiv');
    //var BV = new $.BigVideo({container: $('.screen')});
    //BV.init();
    //alert('#screen-'+this.get('currentPath'));
    
    
    }
  });
Ember.View.reopen({
  init: function() {
    this._super();
    var self = this;

    //bind attributes with 'data-'
    Em.keys(this).forEach(function(key) {
      if (key.substr(0, 5) === 'data-') {
        console.log(key);
        attributeBindings = self.get('attributeBindings');
        //var length = attributeBindings.length;
        //attributeBindings.insertAt(length, key);
        console.log(attributeBindings);
        //self.get('attributeBindings').pushObject(key);
      }
    });
  }
});*/

Forests.advanceReadiness();
