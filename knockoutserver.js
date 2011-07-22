var express = require("express");
	app = express.createServer();
	nowjs = require("now");
	everyone = nowjs.initialize(app);
	
everyone.now.saveViewModel = function(viewModel) {
	everyone.now.updateViewModel(viewModel);
}

app.listen(3000);