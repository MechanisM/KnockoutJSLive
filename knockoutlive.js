if(typeof now != "undefined") {
	now.updateViewModel = function(model) {
		for(i in model) {
			if(typeof viewModel[i] == "function") {
				var f = viewModel[i];
				f(model[i]);
			} else if(typeof viewModel[i] != "undefined") {
				viewModel[i] = model[i];
			}	
		}
	};

	ko.save = function(model) {
		var model = ko.toJS(model);
		
		if(typeof now.modelName != 'undefined') {
			model._modelName = now.modelName;
		}
		
		now.saveViewModel(model);
	};
} else {
	console.log("Could not find the NowJS scope, please make sure knockoutserver.js is running");
}



