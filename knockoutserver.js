var http = require('http');
var server = http.createServer(function(req, res){
  	ko.processRequest(req, res, http);
});
var nowjs = require("now");
	everyone = nowjs.initialize(server);
	ko = require("./node-knockoutlive");

server.listen(3000);