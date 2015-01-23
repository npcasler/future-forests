Forests.HeadlineView = Ember.View.extend({
  tagName: 'wrapper',
  templateName: 'headline',
  attributeBindings: ['data-top', 'data-bottom', 'data-anchor-target', 'data-0'],
  didInsertElement: function() {
    //var model = this.get('content');
    //console.log(model);
    //this.get('controller').getPositions();
    var controller = this.get('controller');
    controller.set('classCounter', controller.get('classCounter') + 1);
    console.log(controller.get('classCounter'));
    if (controller.get('classCounter') === controller.get('classArray').length) {
    controller.bindScrolling();
    }
  },
  actions: {
  
 
  
  }
});
