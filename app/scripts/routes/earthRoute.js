Forests.earthRoute = Ember.Route.extend({
  setupController: function (controller, model) {
    controller.set('menu', model);
    this.controllerFor('plantList').set('content', Forests.Plant.find());
  },
  renderTemplate: function() {
    var controller = this.contollerFor('plantList');
    this.render();
    this.render('plantList', {controller: controller});
  },
  activate: function() {
    $(document).attr('title', 'Future Forest Map');
  }
});
