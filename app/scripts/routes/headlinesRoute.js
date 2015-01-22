Forests.HeadlinesRoute = Ember.Route.extend({
  model: function(params) {
   
    console.log("Headlines route hit");
    console.log("parameter is "+ params.pageId);
    //s = skrollr.init();   

   return  this.get('store').find('headline', {pageId: params.pageId});
   },
   setupController: function(controller, model) {
     this._super(controller, model);
     this.controllerFor('charts').set('content', this.store.find('chart'));
     this.controllerFor('mountains').set('content',this.store.find('mountain'));
  },
   render:function() { 
      console.log('activate-function');
      this._super();
      window.scrollTo(0,120);

      $('div.right-nav-icon').each(function(index) {
        var navId = $(this).attr('id');
        var headlineId  = "#" + navId.substring(0, navId.length - 7);
        console.log(headlineId);
        //arr.push(headlineId);
        //ar.push(headlineId);
        //console.log(ar);
      });
  }
});
