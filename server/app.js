var express = require("express");
var app = express();
var path = require("path");

//middleware
require("./middleware/index")(app);

//static files
app.use("/public", express.static(path.resolve("./public")));
app.use("/client", express.static(path.resolve("./client")));

//routes
require("./routes/index")(app);

module.exports = app;