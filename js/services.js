var services = angular.module('ScheduleServices', ['ngResource']);

services.factory("Navigate",["$rootScope", "$location", "Analytics",
	function($rootScope, $location, Analytics) {


		var tools = [];
		var navigatorService = 
			{goto: function(dest) {
				// Only allow implicit loading of splash screen at app launch
				if(dest == "") {
					dest = "/home";
				}

				$location.path(dest);
				console.log("Page Load: " + dest);
				//Analytics.sendAppView(dest);

			},
			goUp: function() {
				ascend = function (str) {return str.substr(0,str.lastIndexOf("/")); };
				this.goto(ascend($location.path()));
			},
			
			
		};



		
		// Make the back button on mobile (or esc on computer) ascend the URL tree
		document.addEventListener("backbutton",navigatorService.back, false);
		document.addEventListener("keyup", navigatorService.backIfEscape, false);

		return navigatorService;
		
	}
]);

