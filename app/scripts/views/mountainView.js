Forests.MountainView = Ember.View.extend({
  tagName: '',
  templateName: 'mountain',
  didInsertElement: function() {
    console.log('Mountain view created.');
    console.log(this.get('controller'));

  },
  actions: {

 }
});
