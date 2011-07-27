if(typeof now != "undefined") {	
	
	// update the viewModel coming from another Client
	now.updateViewModel = function(model, overwrite) {
		
		// Do we accept incoming data from other viewModels?
		if(viewModel._writeable == true) {
			
			// Yes we do, okay can the incoming model overwrite every property of this model? (This model's properties can change without being saved)
			if(overwrite) {
				
				// Yes it can, okay, let's overwrite the method with the incoming value
				for(i in model) {
					ko.setPropMethod(i, model);
				}
				
			} else {
				
				// Live viewModel object used by KnockoutJS
				var serializedViewModel = ko.toJS(viewModel);

				// Orig model that we saved with .liveModel()
				var serializedOrigViewModel = JSON.parse(ko._originalSerializedModel);
				
				// Exclude array of the fields that have changed and we can't overwrite
				var exclude = [];
				
				// Check if values have changed between the original model and the viewModel updated by knockout
				// Add it to our exclude list
				for(i in serializedViewModel) {
					if(serializedViewModel[i] != serializedOrigViewModel[i]) {
						exclude.push(i);
					}
				}
					

				// Loop through the incoming module
				// And check if the property is in the exclude list and the property is not a special one set with a leading _
				for(i in model) {
					if(exclude.indexOf(i) == -1 && i.indexOf("_") == -1) {
						ko.setPropMethod(i, model);
					}
				}
					

			}
		}
		
	};
	
	// a quick fix to make sure this is available at all times
	[].indexOf || (Array.prototype.indexOf = function(v){
	       for(var i = this.length; i-- && this[i] != v;);
	       return i;
	});
	
	// thanks to RPN: http://www.knockmeout.net/2011/04/utility-functions-in-knockoutjs.html
	// for the function, otherwise I was going to edit ko.observable directly, phew....
	ko.dirtyFlag = function(root, isInitiallyDirty) {

	    var result = function() {}
		var _initialState = ko.observable(ko.toJSON(root));
 		var _isInitiallyDirty = ko.observable(isInitiallyDirty);

	    result.isDirty = ko.dependentObservable(function() {
	        if (_isInitiallyDirty()) {
	            return true;
	        }

	        var isDirty = _initialState() !== ko.toJSON(root);
			ko.serializeModel(root);
	        return isDirty;
	    });

	    result.reset = function() {
	        _initialState(ko.toJSON(root));
	        _isInitiallyDirty(false);
	    };

	    return result;

	};
	
	// serialize our model on the first change
	ko.serializeModel = function(root) {
		if(typeof ko._originalSerializedModel == "undefined") {
			ko._originalSerializedModel = ko.toJSON(root);
		}
			
	};
	
	// Update a viewModel property from an incoming model
	ko.setPropMethod = function(i, model) {
		if(typeof viewModel[i] == "function") {
			var f = viewModel[i];
			f(model[i]);
		} else if(typeof viewModel[i] != "undefined") {
			viewModel[i] = model[i];
		}
	};
	
	// start a "liveModel", removes the need to name your view models "var viewModel"
	// and saves the original viewModel for things like dependentObservables which don't go over the wire (net)
	ko.liveModel = function(model, options) {
		var _def_options = {
			read: true
		};
		
		model._dirtyFlag = ko.dirtyFlag(model);
		
		var opt = $.extend(_def_options, options);
		
		model._writeable = opt.read;
			
		window['viewModel'] = model;	
		return model;
	};
	
	// save function, which tells KnockoutLive to go ahead and propagate the changes across other connected clients
	ko.save = function(saveOptions) {
		var _def_options = {
			overwrite: false,
			ignore: []
		};
		var opt = $.extend(_def_options, saveOptions);
		var model = ko.toJS(viewModel);
		
		if(typeof now.modelName != 'undefined') {
			model._modelName = now.modelName;
		}
		
		if(opt.ignore.length > 0) {
			for(i in opt.ignore) {
				delete model[opt.ignore[i]];
			}
		}
		
		model._overwrite = opt.overwrite;
		now.saveViewModel(model);
	};

} else {
	console.log("Could not find the NowJS scope, please make sure knockoutserver.js is running");
}



