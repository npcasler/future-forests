Forests.BigVideoView = Ember.View.extend({
  tagName: 'wrapper',
  template: 'bigVideo',
  BV: null,
  didInsertElement: function() {
    BV = new $.BigVideo({container: $('.screen')});
    BV.init();
    this.showVideo();

    BV.getPlayer().addEvent('loadeddata', function() {
      this.onVideoLoaded();
    });

    // adjust image positioning so it lines up with the video
    $bigImage
        .css('position', 'relative')
        .imagesLoaded(adjustImagePositioning);
  },
   onVideoLoaded: function() {
     $('#screen'+screen-index).find('.big-image').set('visible= false')
    },

   showVideo: function() {
     BV.show($('#screen'+screenIndex).attr('data-video'),{ambient:true});
   },
});
