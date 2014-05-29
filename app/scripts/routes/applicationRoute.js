Forests.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    activate: function() {
      $(document).attr('title', 'Future Forests Project');
    }
});
