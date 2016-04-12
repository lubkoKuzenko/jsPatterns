var Page = function(name) {
	this.name = name;
	this.spa = null;
	this.send = function(message, to) {
		this.spa.send(message, this, to);
	};
	this.receive = function(message, from) {
		console.log(from.name + " to " + this.name + ": " + message);
	};
};

var SinglePageApplication = function() {
	var pages = {};

	return {

		register: function(page) {
			pages[page.name] = page;
			page.spa = this;
		},

		send: function(message, from, to) {
			if (to) {
				to.receive(message, from);
			} else {
				for (key in pages) {
					if (pages[key] !== from) {
						pages[key].receive(message, from);
					}
				}
			}
		}
	};
};

// How to use
var pageLogin = new Page("Login");
var pageScan = new Page("Scan");
var pageBirth = new Page("Birth");
var pageFinal = new Page("Final");

var spa = new SinglePageApplication();
spa.register(pageLogin);
spa.register(pageScan);
spa.register(pageBirth);
spa.register(pageFinal);

pageLogin.send("I have new content");
pageScan.send("I have some changes");
pageBirth.send("Hi, I know user birth name", pageFinal);
pageFinal.send("Hi, I'm done?", pageLogin);