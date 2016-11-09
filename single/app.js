var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'home.html',
		controller: 'homeController'
	})

	.when('/second', {
		templateUrl: 'about.html',
		controller : 'aboutController'
	})
});

myApp.controller('homeController', ['$scope', '$log', function($scope, $log){
	$scope.name = 'Home';
}]);

myApp.controller('aboutController', ['$scope', '$log', function($scope, $log){
	$scope.name = 'About';
	$log("It worked");
}]);
