var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'home.html',
		controller: 'homeController'
	})

	.when('/skills', {
		templateUrl: 'about.html',
		controller : 'aboutController'
	})
});

myApp.controller('homeController', ['$scope', '$log', function($scope, $log){
	$scope.name = 'About';
}]);

myApp.controller('skillsController', ['$scope', '$log', function($scope, $log){
	$scope.name = 'Skills';
	$log("It worked");
}]);
