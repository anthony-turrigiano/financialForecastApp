var path = require( "path");
var config = require(path.resolve("./config/app"));
var server = require(path.resolve("./server/app"));
var chai = require("chai");
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);

describe('indexRoute', function(){
   it('should respond to Get', function(done){
      chai
        .request(server)
        .get("/")
        .end(function(req, res){
            res.should.have.status(200);
            done();
        });
   });
});