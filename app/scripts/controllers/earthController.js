Forests.EarthController = Ember.ObjectController.extend({
  needs: "maps",
  maps: Ember.computed.alias("controllers.maps"),
  actions: {
    changeClass: function() {
      alert('Changing Class');
      this.set('isActive', true);
    },
  },
    getUrl: function() {
      var url = this.get('maps').getUrl();
      console.log(url);
      return url;
    }
  
  
});
 
