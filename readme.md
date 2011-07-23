# KnockoutJS-Live v0.2

## KnockoutJSlive allows you to sync a KnockoutJS viewModel with other clients viewModel in realtime. 

# Features :

- Keep the same state in your UI across clients representing server data
- Allows you to tag a certain page's viewModel with an ID, which in return assures that only viewModels that share the same idea can update that viewMode across clients
- Removes the need of your viewModel variable to be named "viewModel"

## How to use :

``` js
var myModel = ko.liveModel({
	firstName: ko.observable(),
	lastName: ko.observable("Garcia")
});

myModel.fullName = ko.dependentObservable(function() {
	return this.firstName() + " " + this.lastName();
}, myModel);

now.modelName = "profilePage";

$(document).ready(function() {
	ko.applyBindings(myModel);
});
```

## Requirements

- NodeJS v0.4.1 or greater (http://nodejs.org)
 - Express (http://express.com)
  - NowjS (http://nowjs.com)
- jQuery (http://jquery.com)
- jQuery Templates (http://api.jquery.com/category/plugins/templates)
- KnockoutJS (http://knockoutjs.com)