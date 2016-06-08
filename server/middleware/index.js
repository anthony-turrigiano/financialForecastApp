module.exports = function(app){
  require("./modules/morgan")(app);  
  require("./modules/cors")(app);
  require("./modules/compression")(app);
  require("./modules/bodyParser")(app);
  require("./modules/methodOverride")(app);
};