if(typeof now != "undefined") {
	now.updateViewModel = function(model) {
		var viewModel = ko._originalModel;
		for(i in model) {
			if(typeof viewModel[i] == "function") {
				var f = viewModel[i];
				f(model[i]);
			} else if(typeof viewModel[i] != "undefined") {
				viewModel[i] = model[i];
			}	
		}
	};
	ko.liveModel = function(model) {
		if(typeof ko._originalModel == "undefined")
			ko._originalModel = model;
			
		window['viewModel'] = model;	
		return model;
	};
	ko.save = function() {
		if(typeof ko._originalModel == "undefined")
			return;
			
		var model = ko.toJS(ko._originalModel);
		if(typeof now.modelName != 'undefined') {
			model._modelName = now.modelName;
		}
		now.saveViewModel(model);
	};
} else {
	console.log("Could not find the NowJS scope, please make sure knockoutserver.js is running");
}



