now.updateViewModel = function(model) {
	for(i in model) {
		if(typeof liveModel[i] == "function") {
			var f = liveModel[i];
			f(model[i]);
		} else if(typeof liveModel[i] != "undefined") {
			liveModel[i] = model[i];
		}	
	}
}

var liveModel = {
	
	save: function() {
		var model = ko.toJS(liveModel);
		now.saveViewModel(model);
	}
	
}