Forests.Router.map(function () {
  this.route("splash");
  this.route("welcome", { path: "/"});
  this.route("about", {path: "/about"});
  this.route('summary', {path: "/forest-loss"});
  this.resource("highlights", function() {
    this.resource("highlight", { 'path': '/:classId' });
  });
  this.route("intro", { path: "/intro"});
  this.resource("maps");
  this.route("earth", { path: "/earth"});
  this.route("method", { path: '/info'});

  this.resource("headlines", {path: '/headlines/:pageId'});
  
  this.resource('charts', {path: '/charts'}); 

 //   this.resource("headline", { 'path': '/classId' });
  
  // Add your routes here
});



