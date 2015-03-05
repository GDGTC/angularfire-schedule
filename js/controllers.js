var app = angular.module('ScheduleControllers', []);

app.controller('HomeCtrl', function($scope, Navigate, $firebase, $firebaseArray) {
	$scope.goto = Navigate.goto;

	$scope.tracks = 
	['android','wearables','chrome', 'design', 'starting'];

	$scope.trackNames = 
		{"android":"android",
		 "wearables":"wearables",
		 "chrome":"chrome & cloud",
		 "design":"design & frontend",
		 "starting":"getting started"};

    var ref = new Firebase("https://devfestmn.firebaseio.com/sessions");
    $scope.sessions = $firebaseArray(ref);

    $scope.sessions.$watch(function(event) {
    	console.log("Sessions loaded, reworking data.");
    	s = $scope.sessionTimes = {};
	    // Organize the sessions into timeboxes
	    for (var i = $scope.sessions.length - 1; i >= 0; i--) {
	    	t = $scope.sessions[i].time;
	    	if(!s[t] ) {
	    		s[t] = {"sessions":[]};
	    	}
	    	$scope.sessions[i].order = $scope.tracks.indexOf($scope.sessions[i].track);
	    	console.log("order of " + $scope.sessions[i].title + "/" + $scope.sessions[i].track + " is " + $scope.sessions[i].order);
	    	s[t].sessions.push($scope.sessions[i]);
	    	


	    };
    });

    
});