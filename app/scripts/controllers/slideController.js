Forests.SlideController = Ember.ArrayController.extend({
  sortProperties: ['id'],
  sortAscending: true,
  dataAnchor: function() {
    return Ember.String.htmlSafe('data-anchor-target="'+this.get('classId')+'"');
  }.property('classId')
});
