var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'home.html',
		controller: 'homeController'
	})

	.when('/second', {
		templateUrl: 'second.html',
		controller : 'secondController'
	})
});

myApp.controller('homeController', ['$scope', '$log', function($scope, $log){
	$scope.name = 'Home';
}]);

myApp.controller('secondController', ['$scope', '$log', function($scope, $log){
	$scope.name = 'Second';
	$log("It worked");
}]);
