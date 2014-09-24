Forests.TitlesController = Ember.ArrayController.extend({
  sortProperties: ['orderId'],
  sortAscending: true,

  actions: {
  toggleDetail: function(detail) {
    var detailId = '#' + detail;
    console.log($(detailId).css('max-height'));
    $(detailId).css('max-height', $(detailId).css('max-height') === '0px' ? '1200px' : '0');
  },

  }
});
