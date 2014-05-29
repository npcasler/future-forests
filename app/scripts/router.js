Forests.Router.map(function () {
  this.route("welcome", { path: "/"});
  this.resource("highlights", function() {
    this.resource("highlight");
  });
  // Add your routes here
});



