
app = angular.module('ScheduleApp', 
	['ngResource', 'ngRoute','ngMaterial', 
	'ScheduleControllers', 'ScheduleServices', 
	"firebase"]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/home', {
			templateUrl: 'templates/home.html',
			controller: 'HomeCtrl'
		}).
		otherwise({
			redirectTo: '/home'
		});
}]);
