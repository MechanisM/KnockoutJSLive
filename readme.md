# KnockoutLive v0.3.1

## KnockoutLive allows you to sync a KnockoutJS viewModel with other Clients in realtime. 

## CHANGELOG :

- v0.3.1
	- Simpler server setup, library almost ready to be integrated into existing servers
	- Much better request routing (previously set listeners will run on the http server response)

- v0.3
	- KnockoutLive now renders the necessary javascript from the Node server, comes packaged with the latest jQuery, jQuery Templates and KnockoutJS, file is cached after first load
	- Library is one step closer before I release as an npm install, until then knockoutserver.js uses node-knockoutlive.js as the NPM library
	
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

** KnockoutLive comes compiled with jQuery, jQuery Template, and KnockoutJS **