var app = angular.module('ScheduleControllers', []);

app.controller('HomeCtrl',function($scope, Navigate) {
	$scope.goto = Navigate.goto;
});

app.controller('SignUpCtrl',function($scope, Navigate) {
	$scope.goto = Navigate.goto;

	$scope.signUp = function() {
		var ref = new Firebase("https://tradingplatform.firebaseio.com");
		ref.createUser({
			email    : $scope.username,
			password : $scope.password
		}, function(error, userData) {
			if (error) {
				console.log("Error creating user:", error);
			} else {
				console.log("Successfully created user account with uid:", userData.uid);
				Navigate.goto('/log-in');
			}
		});
	};
});

app.controller('LogInCtrl',function($scope, Navigate) {
	$scope.goto = Navigate.goto;

	$scope.logIn = function() {
		var ref = new Firebase("https://tradingplatform.firebaseio.com");
		ref.authWithPassword({
				email    : $scope.username,
				password : $scope.password
			}, function(error, authData) {
				$scope.$apply(function() {
					if (error) {
						console.log("Login Failed!", error);
					} else {
						console.log("Authenticated successfully with payload:", authData);
						Navigate.goto("/dashboard");
					}
				});
			});
		};
});

app.controller('DashboardCtrl', function($scope, Navigate, $firebase) {
$scope.test = "hi";
	var ref = new Firebase("https://tradingplatform.firebaseio.com/opportunities");
	var sync = $firebase(ref);

	$scope.opportunityList = sync.$asArray();
	
	$scope.select = function(op) {
	  console.log("Op selected ");
	  console.log(op);
	  $scope.selectedOpportunity = op;
	}

});
