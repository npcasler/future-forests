Forests.HeadlineView = Ember.View.extend({
  tagName: 'wrapper',
  templateName: 'headline',
  attributeBindings: ['data-top', 'data-bottom', 'data-anchor-target', 'data-0'],
  didInsertElement: function() {
    //var model = this.get('content');
    //console.log(model);
    this.get('controller').getPositions(); 
    this.get('controller').bindScrolling();
  },
  actions: {
  
 
  
  }
});
