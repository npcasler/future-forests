Forests.UserController = Ember.ObjectController.extend({
  // the deleteMode property is false by default
  deleteMode: false,

  actions: {
    edit: function(){
      this.transitionToRoute('user.edit');
    },
    delete: function(){
      //our delete method only toggles deleteMode's value
      this.toggleProperty('deleteMode');
    },
    cancelDelete: function(){
      //set deleteMode back to false
      this.set('deleteMode', false);
    },
    confirmDelete: function(){
      //this tells Ember-data to delete the current user
      this.get('model').deleteRecord();
      this.get('model').save();
      //then transition to the users route
      this.transitionToRoute('users');
      //set the deleteMode back to false
      this.set('deleteMode', false);
    }


  }
});
