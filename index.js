var config = require("./config/app");
var http = require("http");
var app = require("./server/app");

http.createServer(app).listen(config.port, config.host, function(){
    console.log("Server Listening at %s:%s", config.host, config.port); 
});
