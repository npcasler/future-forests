Forests.HeadlinesRoute = Ember.Route.extend({
  model: function(params) {
   
    console.log("Headlines route hit");
    console.log("parameter is "+ params.pageId);
   

   return  this.get('store').find('headline', {pageId: params.pageId});
   
  }
});
