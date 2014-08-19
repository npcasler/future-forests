Forests.ModalDialogComponent = Ember.Component.extend({
  
  classNameBindings: ['full-height'],
  full-height: true,
  actions: {
    close: function() {
      console.log("Close modal triggered");
      return this.sendAction();
    }
  }
});
