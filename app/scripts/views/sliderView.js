Forests.SliderView = Ember.View.extend({
  tagName: 'div',
  templateName: 'slider',
  elementSelector: '.slider',
  didInsertElement: function() {
    var self = this;
    console.log("Slider added");
    mapIndex = this.get('controller').get('mapIndex');
    maps = this.get('controller');
    $(this.get("elementSelector")).slider({
      min: 0,
      max: 7,
      value: 0,
      step: 1,
      slide: function (event, ui) {
        var uiText = ui.value + 1
        $('#period').text('20' + uiText + '1');
            self.send('sliderDidChange', ui.value);
            //didChangeTime(ui.value);
           
      },
    });
    console.log(mapIndex);
    
  },
  actions: {

  sliderDidChange: function(value) {
    //console.log('SliderDidChange called with mapIndex ' + value);
    console.log("SliderDidChange mapIndex is " + value);
    this.get('controller').set('mapIndex', value);
    //$('#period').text('20' + value++ + '1');
  },
  },
});
   
