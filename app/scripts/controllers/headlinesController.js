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
    var headline = detailId.substring(0, detailId.length - 7);
    console.log(headline);
    console.log($(detailId).css('max-height'));
    $(detailId).css("max-height", $(detailId).css("max-height") === '0px' ? '3600px' : '0');
    if ($(detailId).css('max-height') === '0px') {
      $('body').scrollTo($(detailId).offset().top - 125, {duration: 'slow', offsetTop: '200',  easing: 'swing'});
    } else {
      $('body').scrollTo($(headline), {duration: 'slow', easing: 'swing'});
    }

  },
  
  }
});
