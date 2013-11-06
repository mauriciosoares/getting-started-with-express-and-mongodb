APP.factory('wineApi', ['$http', function($http) {
	var find = function(id) {
		if(!id) {
			id = '';
		}
		return $http({
			method: 'GET',
			url: '/wines/' + id
		});
	};

	var update = function(id, data) {
		console.log(data);
		return $http({
			method: 'PUT',
			data: data,
			url: '/wines/' + id
		});
	};

	return {
		find: find,
		update: update
	};
}]);