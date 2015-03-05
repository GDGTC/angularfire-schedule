var app = angular.module('ScheduleControllers', []);

app.controller('HomeCtrl',function($scope, Navigate) {
	$scope.goto = Navigate.goto;

	$scope.tracks = 
	['android','wearables','chrome', 'design', 'starting'];

	$scope.trackNames = 
		{"android":"android",
		 "wearables":"wearables",
		 "chrome":"chrome & cloud",
		 "design":"design & frontend",
		 "starting":"getting started"};

    sessions =
    [
    	{
			id: 3,
			speakers: [{name:'Speaker Name', bio:'Bio',twitter:'@handle'}],
			title: 'Check-in / Registration',
			description: 'coffee & donuts',
			room: 'Atrium',
			track: 'general',
			time: '8AM'
		},
		{
			id: 3,
			speakers: [{name:'Speaker Name', bio:'Bio',twitter:'@handle'} ],
			title: 'Android Fun',
			description: 'Come and learn everything!',
			room: 'Room 3',
			track: 'android',
			time: '8:45AM'
		}

    ];

    $scope.sessionTimes = {};
    // Organize the sessions into timeboxes
    for (var i = sessions.length - 1; i >= 0; i--) {
    	if(!$scope.sessionTimes[sessions[i].time] ) {
    		$scope.sessionTimes[sessions[i].time] = {"sessions":[]};
    	}
    	$scope.sessionTimes[sessions[i].time].sessions.push(sessions[i]);
    };
});