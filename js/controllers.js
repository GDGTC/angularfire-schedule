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
    	console.log("Sessoins loaded, reworking data.");
    	$scope.sessionTimes = {};
	    // Organize the sessions into timeboxes
	    for (var i = $scope.sessions.length - 1; i >= 0; i--) {
	    	if(!$scope.sessionTimes[$scope.sessions[i].time] ) {
	    		$scope.sessionTimes[$scope.sessions[i].time] = {"sessions":[]};
	    	}
	    	$scope.sessionTimes[$scope.sessions[i].time].sessions.push($scope.sessions[i]);
	    };
    });

    
});