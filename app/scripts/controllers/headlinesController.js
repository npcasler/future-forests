Forests.HeadlinesController = Ember.ArrayController.extend({
  sortProperties: ['orderId'],
  sortAscending: true, //false = descending

  /*filteredHeadlines: function() {
    var page = this.get('page');
    
    if (page) {

      console.log('page is '+page);
      return this.filterBy('pageId', page);
    } else {
      return this
    }
  }.property('pageId', 'model'),
*/


  climateHeadlines: function() {
    return this.filterBy('pageId', 'climate');
  }.property('@each.pageId'),

  forestHeadlines: function() {
    return this.filterBy('pageId', 'forest');
  }.property('@each.pageId'),

  lostHeadlines: function() {
    return this.filterBy('pageId', 'lost');
  }.property('@each.pageId'),

  actions: {

  toggleDetail: function(detail) {
    console.log("openDetail called.");
    console.log(detail);
    var detailId = '#'+detail;
    console.log($(detailId).css('max-height'));
    $(detailId).css("max-height", $(detailId).css("max-height") === '0px' ? '1200px' : '0');

  },
  
  }
});
