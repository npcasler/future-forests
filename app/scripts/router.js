Forests.Router.map(function () {
  this.route("splash");
  this.route("welcome", { path: "/"});
  this.resource("highlights", function() {
    this.resource("highlight", { 'path': '/:highlight_id' });
  });
  this.route("intro", { path: "/intro"});
  this.route("earth", { path: "/map"});
  // Add your routes here
});



