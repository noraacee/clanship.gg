/*jshint esversion: 6 */ 

var CLANSHIP = {
	skillTree: undefined,
	about: undefined,

	ACTIONS: {
		reset: undefined,
		settings: undefined,
		share: undefined,
		saveload: undefined,

		init: function() {
			let dom = document.querySelector(".actions");
			CLANSHIP.ACTIONS.reset = dom.children[0];
			
			CLANSHIP.ACTIONS.settings = dom.children[1];
			CLANSHIP.ACTIONS.settings.onclick = CLANSHIP.SETTINGS.open;
			
			CLANSHIP.ACTIONS.saveload = dom.children[2];
			CLANSHIP.ACTIONS.saveload.onclick = CLANSHIP.SAVELOAD.open;

			CLANSHIP.ACTIONS.share = dom.children[3];
			CLANSHIP.ACTIONS.share.onclick = CLANSHIP.SHARE.open;
		},

		setReset: function(reset) {
			CLANSHIP.ACTIONS.reset.onclick = reset;
		},

		setSettings: function(settings) {
			CLANSHIP.SETTINGS.onOpen = settings.open;
			CLANSHIP.SETTINGS.onSave = settings.save;
			CLANSHIP.SETTINGS.onClose = settings.close;	
		}
	},

	DIALOG: {
		mode: 0, // 1 - settings, 2 - saveload, 3 - share
		container: undefined,
		title: undefined,
		error: undefined,
		details: undefined,
		inputs: undefined,
		text: undefined,
		textArea: undefined,
		options: undefined,
		btns: undefined,
		btn: undefined,
		currClose: undefined,

		init:function() {
			CLANSHIP.DIALOG.container = document.querySelector(".dialog-bg");
			CLANSHIP.DIALOG.title = CLANSHIP.DIALOG.container.querySelector(".dialog-title");
			CLANSHIP.DIALOG.error = CLANSHIP.DIALOG.container.querySelector(".dialog-error");
			CLANSHIP.DIALOG.details = CLANSHIP.DIALOG.container.querySelector(".setting-details");
			CLANSHIP.DIALOG.text = CLANSHIP.DIALOG.container.querySelector(".setting-text");
			CLANSHIP.DIALOG.textArea = CLANSHIP.DIALOG.container.querySelector(".setting-text-area");
			CLANSHIP.DIALOG.options = CLANSHIP.DIALOG.container.querySelector(".setting-options");
			CLANSHIP.DIALOG.btns = CLANSHIP.DIALOG.container.querySelector(".dialog-btns");

			CLANSHIP.DIALOG.inputs = Array.from(CLANSHIP.DIALOG.container.querySelectorAll(".setting-input"));

			CLANSHIP.DIALOG.container.addEventListener("click", function(e) {
				if (e.target === this) {
					CLANSHIP.DIALOG.close();
				}

			});
		},

		open: function() {
			CLANSHIP.DIALOG.container.style.display = "flex";
			document.addEventListener("keydown", CLANSHIP.DIALOG.esc);
		},

		esc: function(e) {
			if (e.keycode === 27 || e.which === 27) {
				document.removeEventListener("keydown", CLANSHIP.DIALOG.esc);
				CLANSHIP.DIALOG.close();
			}
		},

		errorMsg: function(msg) {
			CLANSHIP.DIALOG.error.textContent = msg;
			CLANSHIP.DIALOG.error.style.display = "block";

			setTimeout(function() {
				CLANSHIP.DIALOG.error.removeAttribute("style");
				CLANSHIP.DIALOG.error.textContent = "";
			}, 3000);
		},

		update: function() {
			let name = CLANSHIP.DIALOG.inputs[0].children[1].value;
			if (name.length > 0 && !name.match(/^[\w\-\s()[\]\/\|]+$/)) {
				CLANSHIP.DIALOG.errorMsg("Build name can only contain letters, numbers and spaces");
				return false;
			} else if (name.length > 0 && name !== "Clan Ship") {
				CLANSHIP.SESSION.update(CLANSHIP.DIALOG.inputs[0].children[1].value);
			}

			return true;
		},

		close: function() {
			CLANSHIP.DIALOG.currClose();
			CLANSHIP.DIALOG.currClose = undefined;	
			CLANSHIP.DIALOG.container.removeAttribute("style");
		},

		setTitle: function(title) {
			CLANSHIP.DIALOG.title.textContent = title;
		}
	},
 
	NAVIGATION: {
		current: undefined,
		open: false,
		container: undefined,
		menu: undefined,
		skills: undefined,
		about: undefined,

		init: function() {
			let nav = document.querySelector("nav");
			CLANSHIP.NAVIGATION.container = nav;
			CLANSHIP.NAVIGATION.menu = nav.children[0];			
			CLANSHIP.NAVIGATION.skills = nav.children[1];
			CLANSHIP.NAVIGATION.about = nav.children[2];

			CLANSHIP.NAVIGATION.menu.onclick = CLANSHIP.NAVIGATION.toggleNav;
			CLANSHIP.NAVIGATION.skills.addEventListener("click", CLANSHIP.NAVIGATION.select);
			CLANSHIP.NAVIGATION.about.addEventListener("click", CLANSHIP.NAVIGATION.select);

			CLANSHIP.NAVIGATION.current = CLANSHIP.NAVIGATION.skills;
		},

		toggleNav: function() {
			if (CLANSHIP.NAVIGATION.open)
				CLANSHIP.NAVIGATION.closeNav();
			else
				CLANSHIP.NAVIGATION.openNav();
		},

		openNav: function() {
			CLANSHIP.NAVIGATION.container.style.maxHeight = "10.5rem";
			CLANSHIP.NAVIGATION.container.style.borderBottomColor = "white";
			CLANSHIP.NAVIGATION.menu.children[0].style.display = "none";
			CLANSHIP.NAVIGATION.menu.children[1].style.display = "block";
			CLANSHIP.NAVIGATION.current.style.paddingLeft = 0;
			CLANSHIP.NAVIGATION.current.style.borderLeft = "3px solid white";

			CLANSHIP.NAVIGATION.open = true;
		},

		closeNav: function() {
			CLANSHIP.NAVIGATION.container.removeAttribute("style");
			CLANSHIP.NAVIGATION.menu.children[0].removeAttribute("style");
			CLANSHIP.NAVIGATION.menu.children[1].removeAttribute("style");
			CLANSHIP.NAVIGATION.skills.removeAttribute("style");
			CLANSHIP.NAVIGATION.about.removeAttribute("style");

			CLANSHIP.NAVIGATION.open = false;
		},

		select: function(event) {
			let selected = event.target;
			let current = CLANSHIP.NAVIGATION.current;
			if (selected.dataset.nav === current.dataset.nav)
				return;

			selected.classList.remove("nav-other");
			selected.classList.add("nav-current");
			current.classList.remove("nav-current");
			current.classList.add("nav-other");

			switch(parseInt(selected.dataset.nav)) {
				case 0:
					CLANSHIP.skillTree.show();
					break;
				case 1:
					CLANSHIP.about.show();
					break;
			}

			switch(parseInt(current.dataset.nav)) {
				case 0:
					CLANSHIP.skillTree.hide();
					break;
				case 1:
					CLANSHIP.about.hide();
					break;
			}

			CLANSHIP.NAVIGATION.current = selected;
			CLANSHIP.NAVIGATION.closeNav();
		}
	},

	SAVELOAD: {
		mode: 0, // 0 - save, 1 - save confirmed, 2 - load;
		name: undefined,
		currSave: undefined,
		currLoad: undefined,
		currDelete: undefined,

		open: function() {
			CLANSHIP.DIALOG.currClose = CLANSHIP.SAVELOAD.close;
			CLANSHIP.SAVELOAD.name = undefined;
			CLANSHIP.SAVELOAD.currSave = undefined;
			CLANSHIP.SAVELOAD.currLoad = undefined;
			CLANSHIP.SAVELOAD.currDelete = undefined;
			CLANSHIP.SAVELOAD.openSave();
			CLANSHIP.DIALOG.open();
		},

		openSave: function() {
			CLANSHIP.SAVELOAD.mode = 0;
			CLANSHIP.DIALOG.setTitle("SAVE");
			CLANSHIP.DIALOG.currClose = CLANSHIP.SAVELOAD.close;
			CLANSHIP.DIALOG.details.removeAttribute("style");
			CLANSHIP.DIALOG.options.removeAttribute("style");
			CLANSHIP.UTIL.removeChildren(CLANSHIP.DIALOG.options);

			CLANSHIP.SAVELOAD.currSave = CLANSHIP.SESSION.n ? CLANSHIP.SESSION.n : "Clan Ship";
			

			CLANSHIP.DIALOG.text.style.display = "block";
			CLANSHIP.DIALOG.text.textContent = "Save current build as \"" + CLANSHIP.SAVELOAD.currSave + "\"?";

			CLANSHIP.DIALOG.btns.children[0].textContent = "Save";
			CLANSHIP.DIALOG.btns.children[0].onclick = CLANSHIP.SAVELOAD.save;
			CLANSHIP.DIALOG.btns.children[1].textContent = "Load";
			CLANSHIP.DIALOG.btns.children[1].onclick = CLANSHIP.SAVELOAD.load;
		},

		openLoad: function() {
			CLANSHIP.SAVELOAD.mode = 2;
			CLANSHIP.DIALOG.setTitle("LOAD");

			let keys = localStorage["CLANSHIP.builds"];

			if (!keys || keys.length === 0) {
				CLANSHIP.DIALOG.text.textContent = "There are no builds saved";
				return;
			} else {
				CLANSHIP.DIALOG.details.style.display = "block";
				if (CLANSHIP.SAVELOAD.name)
					CLANSHIP.DIALOG.details.textContent = "Press Load to load build, \"" + CLANSHIP.SAVELOAD.name + "\"";	
				else
					CLANSHIP.DIALOG.details.textContent = "Please select a build to load";
				CLANSHIP.DIALOG.text.removeAttribute("style");
				CLANSHIP.DIALOG.options.style.display = "flex";
			}

			keys = keys.split("|");
			for (let i = 0; i < keys.length; i++) {
				let key = keys[i];

				let option = document.createElement("div");
				option.classList.add("dialog-setting");
				option.style.display = "flex";
				option.style.height = "initial";

				let text = document.createElement("h5");
				if (CLANSHIP.SAVELOAD.name && key === CLANSHIP.SAVELOAD.name)
					text.classList.add("setting-selected");
				else
					text.classList.add("setting-option");
				text.textContent = keys[i];
				text.onclick = CLANSHIP.SAVELOAD.selectLoad(option, key);
				option.appendChild(text);

				let svgns = "http://www.w3.org/2000/svg";
				let close = document.createElementNS(svgns, "svg");
				close.classList.add("dialog-delete");
				let svg = document.createElementNS(svgns, "use");
				svg.setAttributeNS("http://www.w3.org/1999/xlink", "href", "imgs/icons.svg#close");
				close.onclick = CLANSHIP.SAVELOAD.deleteLoad(option, key);
				close.appendChild(svg);
				option.appendChild(close);
				CLANSHIP.DIALOG.options.appendChild(option);

				if (i === 0)
					CLANSHIP.SAVELOAD.currLoad = option;
			}
		},

		close: function() {
			CLANSHIP.DIALOG.details.removeAttribute("style");
			CLANSHIP.DIALOG.text.removeAttribute("style");

			CLANSHIP.DIALOG.options.removeAttribute("style");
			CLANSHIP.UTIL.removeChildren(CLANSHIP.DIALOG.options);
		},

		save: function() {
			if (CLANSHIP.SAVELOAD.mode === 0 || CLANSHIP.SAVELOAD.mode === 1) {
				let build = CLANSHIP.SHARE.build();
				if (!build.includes("b=")) {
					CLANSHIP.DIALOG.errorMsg("No SP is allocated in the current build");
					return;
				}

				if (CLANSHIP.SAVELOAD.mode === 0) {
					if (localStorage[CLANSHIP.SAVELOAD.currSave]) {
						CLANSHIP.DIALOG.text.textContent = "A save already exists under the name, \"" + CLANSHIP.SAVELOAD.currSave + "\". By pressing Save again, you will be overwriting your previous save.";
						CLANSHIP.SAVELOAD.mode = 1;
						return;
					}
				}

				let keys = localStorage["CLANSHIP.builds"];
				if (!keys || keys.length === 0)
					keys = CLANSHIP.SAVELOAD.currSave;
				else if (!keys.includes(CLANSHIP.SAVELOAD.currSave))
					keys += "|" + CLANSHIP.SAVELOAD.currSave;

				localStorage["CLANSHIP.builds"] = keys;
				localStorage[CLANSHIP.SAVELOAD.currSave] = build;
				CLANSHIP.DIALOG.close();
			} else {
				CLANSHIP.SAVELOAD.openSave();
			}
		},

		selectLoad: function(option, key) {
			return function() {
				if (CLANSHIP.SAVELOAD.currDelete) {
						CLANSHIP.SAVELOAD.currDelete.children[1].removeAttribute("style");
						CLANSHIP.SAVELOAD.currDelete = undefined;
					}

				CLANSHIP.SAVELOAD.name = key;
				CLANSHIP.SAVELOAD.currLoad.children[0].classList.remove("setting-selected");
				CLANSHIP.SAVELOAD.currLoad.children[0].classList.add("setting-option");
				option.children[0].classList.remove("setting-option");
				option.children[0].classList.add("setting-selected");
				CLANSHIP.DIALOG.details.textContent = "Press Load to load build, \"" + key + "\"";
				CLANSHIP.SAVELOAD.currLoad = option;
			};
		},

		deleteLoad: function(option, key) {
			return function() {
				if (CLANSHIP.SAVELOAD.currDelete != option) {
					if (CLANSHIP.SAVELOAD.currDelete)
						CLANSHIP.SAVELOAD.currDelete.children[1].removeAttribute("style");

					CLANSHIP.SAVELOAD.currDelete = option;
					CLANSHIP.DIALOG.details.textContent = "Press the X again to confirm deletion of build, \"" + key + "\"";
					option.children[1].style.fill = "var(--error)";
				} else {
					CLANSHIP.DIALOG.options.removeChild(option);

					let keys = localStorage["CLANSHIP.builds"];
					if (keys && keys.includes(key)) {
						localStorage.removeItem(key);
						keys = keys.replace(key, "");
						keys = keys.replace("||", "|");
						if (keys.charAt(0) === "|")
							keys = keys.substr(1);
						localStorage["CLANSHIP.builds"] = keys;
					}

					CLANSHIP.SAVELOAD.currDelete = undefined;
				}
			};
		},

		load: function() {
			if (CLANSHIP.SAVELOAD.mode === 2) {
				if (!CLANSHIP.SAVELOAD.name) {
					CLANSHIP.DIALOG.errorMsg("No build is selected");
					return;
				}

				CLANSHIP.SESSION.n = undefined;
				let build = localStorage[CLANSHIP.SAVELOAD.name];
				if (build)
					CLANSHIP.SESSION.build(build, true);
				CLANSHIP.DIALOG.close();
			} else {
				CLANSHIP.SAVELOAD.openLoad();
			}
		}
	},

	SESSION: {
		support: 0, // 0 - no support, 1 - partial support, 2- full support
		media: undefined,
		n: undefined,
		b: undefined,
		name: undefined,

		init: function() {
			CLANSHIP.SESSION.name = document.querySelector(".title").children[0];
			CLANSHIP.SESSION.media = window.matchMedia("screen and (max-width: 1365px)");

			let url = window.location.href;
			url = url.split("?");
			if (url.length !== 2)
				return;

			CLANSHIP.SESSION.build(url[1], false);
		},

		build: function(build, init) {
			build = build.split("&");

			for (let i = 0; i < build.length; i++) {
				let input = build[i].split("=");
				if (input.length === 2)
					CLANSHIP.SESSION[input[0]] = input[1];
			}

			if (CLANSHIP.SESSION.n) {
				CLANSHIP.SESSION.n = decodeURI(CLANSHIP.SESSION.n);
				CLANSHIP.SESSION.name.textContent = CLANSHIP.SESSION.n;
			} else {
				CLANSHIP.SESSION.name.textContent = "Clan Ship";
			}

			if (init)
				CLANSHIP.skillTree.build(CLANSHIP.SESSION.b);
		},

		update: function(name) {
			CLANSHIP.SESSION.n = name;
			CLANSHIP.SESSION.name.textContent = name;
		},
	},

	SETTINGS: {
		onOpen: undefined,
		onSave: undefined,
		onClose: undefined,

		open: function() {
			CLANSHIP.DIALOG.setTitle("SETTINGS");
			CLANSHIP.DIALOG.currClose = CLANSHIP.SETTINGS.close;
			
			let input = CLANSHIP.DIALOG.inputs[0];
			input.style.display = "flex";
			input.children[0].disabled = "true";
			input.children[0].children[0].textContent = "Build Name";
			if (CLANSHIP.SESSION.n)
				CLANSHIP.DIALOG.inputs[0].children[1].value = CLANSHIP.SESSION.n;
			else
				CLANSHIP.DIALOG.inputs[0].children[1].value = "Clan Ship";
			
			CLANSHIP.DIALOG.btns.children[0].textContent = "Cancel";
			CLANSHIP.DIALOG.btns.children[0].onclick = CLANSHIP.DIALOG.close;
			CLANSHIP.DIALOG.btns.children[1].textContent = "Save";
			CLANSHIP.DIALOG.btns.children[1].onclick = CLANSHIP.SETTINGS.save;
			CLANSHIP.DIALOG.btns.style.display = "flex";

			let keydown = function(e) {
				if (e.keycode === 13 || e.which === 13)
					CLANSHIP.SETTINGS.save();
			};
			
			for (let i = 0; i < CLANSHIP.DIALOG.inputs.length; i++) {
				let input = CLANSHIP.DIALOG.inputs[i];
				input.children[1].addEventListener("keydown", keydown);
			}

			if (CLANSHIP.SETTINGS.onOpen)
				CLANSHIP.SETTINGS.onOpen();
			CLANSHIP.DIALOG.open();
		},

		close: function() {
			if (CLANSHIP.SETTINGS.onClose)
				CLANSHIP.SETTINGS.onClose();
			CLANSHIP.DIALOG.inputs[0].removeAttribute("style");
			CLANSHIP.DIALOG.inputs[0].children[0].removeAttribute("disabled");
			CLANSHIP.DIALOG.btns.removeAttribute("style");
		},

		save: function() {
			if (CLANSHIP.DIALOG.update()) {
				if (CLANSHIP.SETTINGS.onSave)
					CLANSHIP.SETTINGS.onSave();
				CLANSHIP.DIALOG.close();
			}
		}
	},

	SHARE: {
		open: function() {
			CLANSHIP.DIALOG.setTitle("SHARE");
			CLANSHIP.DIALOG.currClose = CLANSHIP.SHARE.close;

			let url = location.protocol + '//' + location.host + location.pathname;

			let share = CLANSHIP.SHARE.build();

			if (share.length > 0)
				url += "?" + share;

			CLANSHIP.DIALOG.text.textContent = encodeURI(url);
			CLANSHIP.DIALOG.text.style.display = "block";
			CLANSHIP.DIALOG.btns.children[0].textContent = "Copy";
			CLANSHIP.DIALOG.btns.children[0].onclick = CLANSHIP.SHARE.copyShare;
			CLANSHIP.DIALOG.btns.children[1].style.display = "none";
			CLANSHIP.DIALOG.currClose = CLANSHIP.SHARE.close;
			CLANSHIP.DIALOG.open();
		},

		build: function() {
			let share = "";
			if (CLANSHIP.SESSION.n)
				share += "n=" + CLANSHIP.SESSION.n + "&";

			let build = CLANSHIP.skillTree.actions.share();
			if (build)
				share += "b=" + build;

			return share;
		},

		copyShare: function() {
			let selection = window.getSelection();
			let range = document.createRange();
			range.selectNodeContents(CLANSHIP.DIALOG.text);
			selection.removeAllRanges();
			selection.addRange(range);
			document.execCommand("copy");
			CLANSHIP.DIALOG.close();
		},

		close: function() {
			CLANSHIP.DIALOG.text.style.display = "none";
			CLANSHIP.DIALOG.btns.children[1].removeAttribute("style");
		}
	},

	UTIL: {
		convertToLetterNotation: function(value) {
			let round = 0;
			if (value >= 1000000000000) {
				value /= 1000000000000;
				round = 4;
			} else if (value >= 1000000000) {
				value /= 1000000000;
				round = 3;
			} else if (value >= 1000000) {
				value /= 1000000;
				round = 2;
			} else if (value >= 1000) {
				value /= 1000;
				round = 1;
			}

			value = Math.round(value * 100) / 100;

			switch(round) {
				case 0:
					return value;
				case 1:
					return value + "K";
				case 2:
					return value + "M";
				case 3:
					return value + "B";
				case 4:
					return value + "T";
			}
		},

		removeChildren: function(ele) {
			while (ele.firstChild)
				ele.removeChild(ele.firstChild);
		}
	},

	INIT: {
		init: function() {
			CLANSHIP.INIT.checkSupport();
			if (CLANSHIP.SESSION.support > 0) {
				CLANSHIP.ACTIONS.init();
				CLANSHIP.DIALOG.init();
				CLANSHIP.NAVIGATION.init();
				CLANSHIP.SESSION.init();
			}
		},

		checkSupport: function() {
			if (CSS.supports) {
				if(CSS.supports("display", "grid"))
					CLANSHIP.SESSION.support = 2;
				else if (CSS.supports("display", "-ms-grid"))
					CLANSHIP.SESSION.support = 1;
			}
		}
	}
};

class ClanShip {
	get support() {
		return CLANSHIP.SESSION.support;
	}

	get media() {
		return CLANSHIP.SESSION.media;
	}

	get actionReset() {
		return CLANSHIP.ACTIONS.reset;
	}

	get dialog() {
		return CLANSHIP.DIALOG;
	}

	get util() {
		return CLANSHIP.UTIL;
	}

	setActionReset(reset) {
		CLANSHIP.ACTIONS.setReset(reset);
	}

	setActionSettings(settings) {
		CLANSHIP.ACTIONS.setSettings(settings);
	}
}

CLANSHIP.INIT.init();
var clanship = new ClanShip();
CLANSHIP.skillTree = new SkillTree(
	document.querySelector(".skill-tree"),
	clanship,
	CLANSHIP.SESSION.b);
CLANSHIP.about = new About(
	document.querySelector(".about"),
	clanship);
CLANSHIP.about.hide();