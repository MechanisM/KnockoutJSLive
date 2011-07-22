var express = require("express");
	app = express.createServer();
	nowjs = require("now");
	everyone = nowjs.initialize(app);
	
everyone.now.saveViewModel = function(viewModel) {	
	if(typeof this.now.modelName == "undefined")
		everyone.now.updateViewModel(viewModel);
	else if(this.now.modelName == viewModel._modelName)
		everyone.now.filterUpdate(viewModel, this.now.modelName);
}

everyone.now.filterUpdate = function(viewModel, targetModelName) {
	if(targetModelName == this.now.modelName)
		this.now.updateViewModel(viewModel);
}

app.listen(3000);