/*jshint esversion: 6 */ 

var ABOUT = {
	CLANSHIP: undefined,

	CONTAINER: {
		dom: undefined,

		hide: function() {
			ABOUT.CONTAINER.dom.style.display = "none";
		},

		show: function() {
			ABOUT.CONTAINER.dom.removeAttribute("style");
			ABOUT.CLANSHIP.actionReset.style.display = "none";
			ABOUT.CLANSHIP.setActionSettings(ABOUT.ACTIONS.SETTINGS);
		}
	},

	ACTIONS: {
		SETTINGS: {
		}
	},

	INIT: {
		init: function(dom, clanship) {
			ABOUT.CONTAINER.dom = dom;
			ABOUT.CLANSHIP = clanship;
		}
	}
};

class About {
	constructor(dom, clanship) {
		ABOUT.INIT.init(dom, clanship);
	}

	hide() {
		ABOUT.CONTAINER.hide();
	}

	show() {
		ABOUT.CONTAINER.show();
	}
}