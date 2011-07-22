KnockoutJSlive v0.1.5

KnockoutJSlive allows you to sync a KnockoutJS viewModel with other clients. For example:

User A - Is editing Report X
User B - Is looking at Repot X 

User A - Saves Report X, and upon success, the ko.save(viewModel); function runs
User B - Receives changes to Report X in realtime without refreshing the browser

How to avoid updates across different viewModels with same property names:

Simply include now.modelName = "something" in your javascript and KnockoutJSlive will only update corresponding models with the same name. If no now.modelName is included, it will attempt to update any viewModel it finds that contains the same properties.

TODO:

- Make KnockoutJSlive detect the variable used for the viewModel, at the moment it expects it to be "var viewModel = {};"

Requirements

- NodeJS v0.4.1 or greater (http://nodejs.org)
 - Express (http://express.com)
  - NowjS (http://nowjs.com)
- jQuery (http://jquery.com)
- jQuery Templates (http://api.jquery.com/category/plugins/templates)
- KnockoutJS (http://knockoutjs.com)