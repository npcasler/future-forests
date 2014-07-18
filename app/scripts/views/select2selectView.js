Forests.Select2SelectView = Ember.Select.extend({
  prompt: 'Please select...',
  classNames: ['input-large'],
  
  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, 'processChildElements');
  },

  processChildElements: function() {
    this.$().select2({
        //do here any configuration of the select2 component
    });
  },

  willDestroyElement: function() {
    this.$().select2("destroy");
  }
});

