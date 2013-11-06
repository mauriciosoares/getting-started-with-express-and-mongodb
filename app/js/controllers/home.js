APP.controller('HomeCtrl', ['$scope', 'wineApi', '$http', function($scope, wineApi, $http) {
	$scope.wines = [];

	wineApi.find().success(function(data) {
		$scope.wines = data;
	});

}]);