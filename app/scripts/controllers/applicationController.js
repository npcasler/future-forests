Forests.ApplicationController = Ember.ArrayController.extend({
  needs: ['bigVideo'],
  BV: null,
  selectedScreen: null,
  currentPathChange: function() {
    window.scrollTo(0, 0);
    this.set('selectedScreen', '#screen-' + this.get('currentPath'));
     
    console.log("Path is "+ this.get('currentPath'));
    console.log('BV is' + this.get('BV'));
    selected = this.get('selectedScreen');
    //this.get('BV').show($(selected).attr('data-video'),{ambient: true});
    //console.log(this.get('BV'));
     // BV = new $.BigVideo({container: $('.screen')});
     // BV.init();
     // BV.show($(this.get('selectedScreen')).attr('data-video'), {ambient: true});

   // console.log('SelectedScreen video found at ' + this.get('selectedScreen').get('data-video')); 
   // BV.show($(this.get('selectedScreen')).attr('data-video'),{ambient:true});
  }.observes('currentPath'),
  /*
  currentPathChange: function() {
    switch(this.get('currentPath')) {
      case 'earth':
       BV.show($('#screen-').attr('data-video'),{ambient:true});
        break;
      case 'highlights.index':
        alert(this.get('currentPath'));
        break;
      case 'welcome':
        alert(this.get('currentPath'));
        break;
      case 'intro':
        alert(this.get('currentPath'));
        break;
    }
  }.observes('currentPath'),
  */
  
  
});

