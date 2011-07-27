var server = require('http').createServer();
	nowjs = require("now");
	everyone = nowjs.initialize(server);
	ko = require("./node-knockoutlive").init(server);

server.listen(3000);