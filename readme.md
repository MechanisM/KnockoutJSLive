KnockoutJSlive v0.1

KnockoutJSlive allows you to sync a KnockoutJS viewModel with other clients. For example:

User A - Is editing Report X
User B - Is looking at Repot X 

User A - Saves Report X, and upon success, the ko.save(viewModel); function runs
User B - Receives changes to Report X in realtime without refreshing the browser

TODO:

- Make KnockoutJSlive detect the variable used for the viewModel, at the moment it expects it to be "var viewModel = {};"
- Support different "viewModel synching", at the moment, it will update viewModel B if it contains the same method that viewModel A is sending, no matter if it's a different page. Example:

Student Page - viewModel.firstName would update
Staff Page - viewModel.firstName

Why?

Because both clients are connected to the NowJS server, with viewModels that share a property. Hopefully a fix is coming in v0.2.

Requirements

- NodeJS v0.4.1 or greater (http://nodejs.org)
 - Express (http://express.com)
  - NowjS (http://nowjs.com)
- jQuery (http://jquery.com)
- jQuery Templates (http://api.jquery.com/category/plugins/templates)
- KnockoutJS (http://knockoutjs.com)