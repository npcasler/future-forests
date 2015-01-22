Forests.HeadlinesController = Ember.ArrayController.extend({
  needs: ['charts','mountains'],
  sortProperties: ['orderId'],
  sortAscending: true, //false = descending
  previousScroll: $(window).scrollTop(),
  classArray: [],

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

  getMethods: function(obj) {
    var res = [];
    for (var m in obj) {
      if (typeof obj[m] == "function") {
        res.push(m);
      }
    }
    return res;
  },

  logId: function(elem,idx,arr) {
    var id = '#'+elem;
    var pos = $(id).offset().top;
    var arr = [];
    arr[idx] = [id,  pos];
     
    return arr;
  },
  getPositions: function() {
    var arr = this.get('classArray');
    arr.forEach(this.logId);

    return arr;
  },

  modelDidChange: function() {
    console.info(this.get('model').type);
    classArray = this.get('model').mapBy('classId');
    //classArray.forEach(this.logId);
  }.observes('model.isLoaded'),
  bindScrolling: function(opts) {
    var onScroll, _this =this;
    //opts = opts || {debounce: 100};
     console.log("CONSOLE CAN YOU HEAR ME?");
     //var model = _this.get('model');
     //console.log(model.type);
     //methods = this.getMethods(model);
     //console.log(methods);


      /*$('div.right-nav-icon').each(function(index) {
        var navId = $(this).attr('id');
        var headlineId  = "#" + navId.substring(0, navId.length - 7);
        console.log(headlineId);
        //arr.push(headlineId);
        //ar.push(headlineId);
        //console.log(ar);
      });*/
      //console.log(arr);

    

    onScroll = function() {
      //return _this.scrolled();
      return _this.debounce(_this.headlineScrolled(), 200);
    };
    $(document).bind('touchmove', onScroll);
    $(window).bind('scroll', onScroll);
    },
  scrolled: function() {
    console.log('MapsController was scrolled');
    console.log($(window).scrollTop());
  },

  debounce: function(func,wait,immediate) {
    var timeout;
    return function() {
      var context = this,
          args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        timeout = null;
        if (!immediate) {
          func.apply(context,args);
        }
      }, wait);
      if (immediate && !timeout)
        func.apply(context,args);
    };
  },
  headlineScrolled: function() {
    var currentScroll = $(window).scrollTop();
    var elems = this.getPositions();
    console.log(elems);
    if (currentScroll > this.get('previousScroll')) {
      console.log('down');
      
    } else if (currentScroll < this.get('previousScroll')){
      console.log('up');
    } 
    this.set('previousScroll', currentScroll);
  },

  
  actions: {

  toggleDetail: function(detail) {
    console.log("openDetail called.");
    console.log(detail);
    
    var detailId = '#'+detail;
    var headline = detailId.substring(0, detailId.length - 7);
    console.log(headline);
    console.log($(detailId).css('max-height'));
    $(detailId).css("max-height", $(detailId).css("max-height") === '0px' ? '3600px' : '0px');
    if ($(detailId).css('max-height') === '0px') {
      $('body').scrollTo($(detailId).offset().top - 125, {duration: 'slow', offsetTop: '200',  easing: 'swing'});
    } else {
      $('body').scrollTo($(headline), {duration: 'slow', easing: 'swing'});
    }

  },

  scrollToHeadline: function(headline) {
    console.log('scrollToHeadline called.');
    console.log(headline);
    var headlineId = '#'+headline;
    var scrollId = headlineId + '-scroll';
    console.log("ScrollId is "+scrollId);
    $('body').scrollTo($(headlineId), {duration: 'slow', easing: 'swing'});
    $(scrollId).addClass('active');


  },
  


  }
});
