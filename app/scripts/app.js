var Forests = window.Forests = Ember.Application.create({
  app_title: 'Forest Forecasts'
});

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');

(function( $ ) {
  //Init Skrollr
  var s = skrollr.init({
    render: function(data){
      //debuggiong - Log the current scroll position
      console.log(data.curTop);
    }
  });
}) ( jQuery );

Forests.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('welcome');
  }

});

