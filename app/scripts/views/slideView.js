Forests.slideView = Ember.View.extend({

  //rest of View
});

Forests.slideView.reopen({ 
  init: function() {
    this._super();
    var self = this;

    //bind attributes beginning with 'data'
    Ember.keys(this).forEach(function(key) {
      if (key.substr(0,5) === 'data') {
        self.get('attributeBindings').pushObject(key);
      }
    });
  }
});
