Forests.Router.map(function () {
  this.route("welcome", { path: "/"});
  this.route("about", {path: "about"});
  this.route("earth", { path: "/earth"});
  this.route("method", { path: '/info'});
  this.route('maps', {path: '/maps'});
  this.resource("headlines", {path: '/headlines/:pageId'});
  
  //this.resource('charts', {path: '/charts'}); 
  //this.resource('mountains',{path: '/mountains'});

 //   this.resource("headline", { 'path': '/classId' });
  
  // Add your routes here
});



