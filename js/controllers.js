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
			speakers: [{name:'Speaker Name', bio:'Bio',twitter:'@handle'}],
			title: 'Check-in / Registration',
			description: 'coffee & donuts',
			room: 'Atrium',
			track: 'general',
			time: '8:00AM'
		},
		{
			speakers: [{name:'Aaron Goldberg', bio:'Bio',twitter:'@handle'} ],
			title: 'RecyclerView',
			description: 'Come and learn everything!',
			room: 'Room 3',
			track: 'android',
			time: '8:45AM'
		},
		{
			speakers: [{name:'Brian Yencho', bio:'Bio',twitter:'@handle'} ],
			title: 'Apps for Android Wear',
			description: 'Come and learn everything!',
			room: 'Room 3',
			track: 'android',
			time: '8:45AM'
		},
		{
			speakers: [{name:'Noah Blon', bio:'Bio',twitter:'@handle'} ],
			title: 'Material Design / Front End',
			description: 'Come and learn everything!',
			room: 'Room 3',
			track: 'android',
			time: '8:45AM'
		},
		{
			speakers: [{name:'Ilya Verbitskiy', bio:'Bio',twitter:'@handle'} ],
			title: 'WebRTC Workshop',
			description: 'Come and learn everything!',
			room: 'Room 3',
			track: 'android',
			time: '8:45AM'
		},
		{
			speakers: [{name:'Stephen Fluin', bio:'Bio',twitter:'@handle'} ],
			title: 'AngularJS Workshop',
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