var fs = require('fs');
var dataStoreBase = "";
var dataStoreLive = "";
var dataStoreLiveSingle = "";
var defaultListeners, server;

var ko = function knockoutlive() {
	this.init = function(server) {
		defaultListeners = server.listeners('request');
		server.removeAllListeners('request');
		server.on('request', this.processRequest);
	}
	
	this.processRequest = function(req, res, http) {
		
		if(req.url.split('?')[0] === '/ko/base.js') {
			if(dataStoreBase.length > 0) {
				res.writeHead(200, {
				  'Content-Length': dataStoreBase.length,
				  'Content-Type': 'text/javascript' });
				res.end(dataStoreBase);
			} else {
				fs.readFile(__dirname + "/lib/jquery.min.js", function (err, data) {
					if (err) throw err;

					dataStoreBase += data.toString();

					fs.readFile(__dirname + "/lib/jquery.tpl.min.js", function (err, data2) {
						if (err) throw err;
						dataStoreBase += data2.toString();
						
						
						res.writeHead(200, {
						  'Content-Length': dataStoreBase.length,
						  'Content-Type': 'text/javascript' });
						res.end(dataStoreBase);
					});
				});
			}
			
			
		} else if(req.url.split('?')[0] === '/ko/live.js') {
			if(dataStoreLive.length > 0) {
				res.writeHead(200, {
				  'Content-Length': dataStoreLive.length,
				  'Content-Type': 'text/javascript' });
				res.end(dataStoreLive);
			} else {
				
				fs.readFile(__dirname + "/lib/knockoutjs.js", function (err, data3) {
					if (err) throw err;
					dataStoreLive += data3.toString();
				
					fs.readFile(__dirname + "/lib/knockoutlive.min.js", function (err, data4) {
						if (err) throw err;
						dataStoreLive += data4.toString();
					
						res.writeHead(200, {
						  'Content-Length': dataStoreLive.length,
						  'Content-Type': 'text/javascript' });
						res.end(dataStoreLive);
					});
				});
				
			}
			
		} else if(req.url.split('?')[0] === '/ko/live_single.js') {
			if(dataStoreLiveSingle.length > 0) {
				res.writeHead(200, {
				  'Content-Length': dataStoreLiveSingle.length,
				  'Content-Type': 'text/javascript' });
				res.end(dataStoreLiveSingle);
			} else {
				
				fs.readFile(__dirname + "/lib/knockoutlive.min.js", function (err, data4) {
					if (err) throw err;
					dataStoreLiveSingle += data4.toString();
				
					res.writeHead(200, {
					  'Content-Length': dataStoreLiveSingle.length,
					  'Content-Type': 'text/javascript' });
					res.end(dataStoreLiveSingle);
				});
				
			}
		} else {
			var i;
			for (i in defaultListeners) {
			      defaultListeners[i].call(server, req, res);
			}
		}
	}
	
	return this;
}

everyone.now.saveViewModel = function(viewModel) {

	if(typeof this.now.modelName == "undefined")
		everyone.now.updateViewModel(viewModel, "");
	else if(this.now.modelName == viewModel._modelName)
		everyone.now.filterUpdate(viewModel, this.now.modelName);

}

everyone.now.filterUpdate = function(viewModel, targetModelName) {

	if(targetModelName.length < 1 && typeof this.now.modelName == "undefined")
			this.now.updateViewModel(viewModel, viewModel._overwrite);

	if(targetModelName == this.now.modelName)
		this.now.updateViewModel(viewModel, viewModel._overwrite);

}

module.exports = new ko();