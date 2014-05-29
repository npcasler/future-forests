Forests.HighlightsRoute = Ember.Route.extend({
 // activate: function() {
 //   $(document).attr('title', 'Future Forests Highlights');
 // },
  model: function() {
    return this.store.find('highlight');
  },
 // actions: {
 //   loading: function(transition, originRoute) {
 //     return true;
 // }
 // }            
});

