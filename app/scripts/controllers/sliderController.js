Forests.SliderController = Ember.ObjectController.extend({
  needs: "maps",
  maps: Ember.computed.alias("controllers.maps"),
});
