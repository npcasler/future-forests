Forests.BootstrapDropdownSelectComponent = Em.Component.extend({
  valueKey: 'id',
  labelKey: 'label',

  selectedOption: function() {
    if (Ember.isEmpty(this.get('value'))) {
      return {id: 0, label: 'Choose One' };
    } else {
      return this.get('options').findProperty('id', this.get('value'));
    }
  }.property('options', 'value'),

  actions: {
    select: function(opt) {
      this.set('value', opt.id);
    },
    _underlyingSelectionDidChange: Ember.observer((function() {
      this.$().select2('val', this.$().val().toString());
    }), "selection.@each")
  }
});
