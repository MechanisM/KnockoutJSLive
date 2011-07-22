KnockoutJSlive v0.1

KnockoutJSlive allows you to sync a KnockoutJS viewModel with other clients. For example:

User A - Is editing Report X
User B - Is looking at Repot X 

User A - Saves Report X, and upon success, the ko.save(viewModel); function runs
User B - Receives changes to Report X in realtime without refreshing the browser

Example 1

$.post("http://url.com/save", function(ret) {
	
	if(ret.success) {
		ko.save(viewModel);
	}
	
}, 'json');

For other examples, look in the examples folder.

TODO:

- Make KnockoutJSlive detect the variable used for the viewModel, at the moment it expects it to be "var viewModel = {};"
- Support different "viewModel synching", at the moment, it will update viewModel B if it contains the same method that viewModel A is sending, no matter if it's a different page. Example:

Student Page - viewModel.firstName would update
Staff Page - viewModel.firstName

Why?

Because both clients are connected to the NowJS server, with viewModels that share a property. Hopefully a fix is coming in v0.2.