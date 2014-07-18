Forests.Router.map(function () {
  this.route("splash");
  this.route("welcome", { path: "/"});
  this.route("about", {path: "/about"});
  this.route('summary', {path: "/summary"});
  this.resource("highlights", function() {
    this.resource("highlight", { 'path': '/:classId' });
  });
  this.route("intro", { path: "/intro"});
  this.resource("maps");
  this.route("earth", { path: "/earth"});
  this.route("method", { path: '/info'});
  this.route("climate", { path: "/climate"});  
  this.route("tutorial", { path: "/tutorial"}); 
  // Add your routes here
});



