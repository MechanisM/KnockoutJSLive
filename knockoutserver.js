var server = require('http').createServer(function(req, res){
  	res.end("KnockoutLive Server v0.2.5");
});

var nowjs = require("now");
	everyone = nowjs.initialize(server);
	
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

server.listen(3000);