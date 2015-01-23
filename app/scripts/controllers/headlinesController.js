Forests.HeadlinesController = Ember.ArrayController.extend({
  needs: ['charts','mountains'],
  sortProperties: ['orderId'],
  sortAscending: true, //false = descending
  previousScroll: $(window).scrollTop(),
  classArray: [],
  classCounter: 0,

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

  comparePos: function(id, pos) {
    console.log('comparePos called');
     
    var divSize = $(id).height();
    var divTop = pos;
    var divBottom = divTop + divSize;
    var windowTop = $(window).scrollTop();
    var windowSize = window.innerHeight; 
    var windowBottom = windowTop + windowSize;
    var scrollView = divSize * 0.8;
    console.log("Top: " + windowTop + ", Bottom: " + windowBottom);
    divId = id+ '-scroll';
    if (((divTop + scrollView) > windowTop) && ((divBottom - scrollView) < windowBottom)) {
      console.log(id + ' is at ' + pos  +' and is active');
      $(divId).addClass('right-nav-active'); 
    } else {
      console.log(id +' is at '+ pos +' and is inactive');
      $(divId).removeClass('right-nav-active'); 
    }
  },

  logId: function(elem,idx,arr) {
    

    var id = '#'+elem;
    var pos = $(id).offset().top;
    var tuple = [];
    
    tuple = [id,  pos];
    this.comparePos(id, pos); 
    //console.log(idx);
    //console.log(tuple);
    return tuple;
  },
  getPositions: function() {
    console.log('getPositions called');
    var arr = this.get('classArray');
    console.log(arr);
    var classList = [];
    arr.forEach(this.logId, this);
    

    return arr;
  },

  highlightFirstDot: function() {
    
    var activeDot = this.get('classArray')[0];
    var activeDotId = '#'+ activeDot + "-scroll";
    console.log(typeof(activeDotId));

    console.log($(activeDotId));
    if (1 + 1 === 2) {
    $(activeDotId).addClass('right-nav-active');
    } else {
      $(activeDotId).addClass('right-nav-active');
    }
     
    console.log($(activeDotId).hasClass('right-nav-active'));
  },
  modelDidChange: function() {
    console.info(this.get('model').type);
    this.set('classArray', this.get('model').mapBy('classId'));
    this.set('classCounter', 0);
    //classArray.forEach(this.logId);
  }.observes('model.isLoaded'),
  bindScrolling: function(opts) {
    var onScroll, _this =this;
    //opts = opts || {debounce: 100};
     console.log("CONSOLE CAN YOU HEAR ME?");
    
     this.highlightFirstDot();
    onScroll = function() {
      //return _this.scrolled();
      return _this.debounce(_this.headlineScrolled(), 2000);
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
    this.getPositions();
    //console.log(elems);
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
