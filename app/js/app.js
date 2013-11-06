'use strict';

var APP = angular.module('wines', ['ngRoute']);

APP.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'partials/home.html',
		controller: 'HomeCtrl'
	}).
	when('/wine/:id', {
		templateUrl: 'partials/wine.html',
		controller: 'WineCtrl'
	}).
	otherwise({
		redirectTo: '/'
	});
}]);