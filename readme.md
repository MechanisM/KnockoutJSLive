# KnockoutLive v0.2.5

## KnockoutLive allows you to sync a KnockoutJS viewModel with other Clients in realtime. 

## CHANGELOG :

- v0.2.5
	- Removed dependency on ExpressJS, which is no longer needed for KnockoutLive to function
	- ko.save(options) now accepts an options parameter
	- KnockoutLive now has three different configurations. Will write guide for it soon.
	
## Chatroom with KnockoutLive
``` js
var chatRoom = ko.liveModel({
	messages: ko.observableArray([]),
	send: function() {
		chatRoom.messages.push({
			text: this.text()
		});
		ko.save({ 
			overwrite: true, 
			ignore: ["text"]
		});
	},
	text: ko.observable()
});
now.modelName = "room1";
$(document).ready(function() {
	ko.applyBindings(chatRoom);
});
```

## Requirements

- NodeJS v0.4.1 or greater (http://nodejs.org)
  - NowjS (http://nowjs.com)
- jQuery (http://jquery.com)
- jQuery Templates (http://api.jquery.com/category/plugins/templates)
- KnockoutJS (http://knockoutjs.com)