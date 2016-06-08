var path = require("path");
var config = require(path.resolve("./config/app"));
var serve = require("serve-static");

module.exports = function(app){
  app.use(serve(path.resolve("./views"),{"index": ["index.html"]}));
};