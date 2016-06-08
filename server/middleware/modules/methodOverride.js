module.exports = function(app){
    
  var methodOverride = require("method-override");
  app.use(methodOverride('_method'));
  
};