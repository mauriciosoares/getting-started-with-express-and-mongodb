APP.controller('WineCtrl', ['$scope', 'wineApi', '$routeParams', function($scope, wineApi, $routeParams) {
	$scope.wine = {};

	var id = $routeParams.id;

	wineApi.find(id).success(function(data) {
		$scope.wine = data;
		delete $scope.wine._id;
	});

	$scope.submit = function() {
		wineApi.update(id, $scope.wine).success(function(data) {
			console.log(data);
		});
	};
}]);