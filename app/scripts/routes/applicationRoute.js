Forests.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
  setupController: function(controller, model) {
    this._super(controller, model);
    this.controllerFor('bigVideos', this.store.find('bigVideo'));
  },
    activate: function() {
      $(document).attr('title', 'Future Forests Project');
    },
    actions: {
      openModal: function(modalName) {
        console.log('OpenModal has been called on '+ modalName);
        return this.render(modalName, {
        into: 'application',
        outlet: 'modal'
      });
     },

      closeModal: function(modal) {
        return this.disconnectOutlet({
            outlet: 'modal',
            parentView: 'application'
          });
        }
      }
    

});
