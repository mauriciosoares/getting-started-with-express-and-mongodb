APP.controller('HomeCtrl', ['$scope', 'wineApi', function($scope, wineApi) {
	$scope.wines = [];

	$scope.deleteWine = function(wine) {
		wineApi.delete(wine._id).success(function(data) {
			console.log(data);
			var index = $scope.wines.indexOf(wine);
			$scope.wines.splice(index, 1);
		});
	};

	wineApi.find().success(function(data) {
		$scope.wines = data;
	});

}]);