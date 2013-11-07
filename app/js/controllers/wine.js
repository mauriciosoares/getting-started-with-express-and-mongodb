APP.controller('WineCtrl', ['$scope', 'wineApi', '$routeParams', '$location', function($scope, wineApi, $routeParams, $location) {
	$scope.wine = {};

	var id = $routeParams.id;

	wineApi.find(id).success(function(data) {
		$scope.wine = data;
		delete $scope.wine._id;
	});

	$scope.submit = function() {
		wineApi.update(id, $scope.wine).success(function(data) {
			$location.path('/');
		});
	};
}]);