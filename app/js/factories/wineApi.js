APP.factory('wineApi', ['$http', function($http) {
	var api = function(id, method, data) {
		if(!data) {
			data = null;
		}
		return $http({
			method: method,
			data: data,
			url: '/wines/' + id
		});
	};

	var find = function(id) {
		if(!id) {
			id = '';
		}
		return api(id, 'GET');
	};

	var update = function(id, data) {
		return api(id, 'PUT', data);
	};

	var del = function(id) {
		return api(id, 'DELETE');
	};

	return {
		find: find,
		update: update,
		delete: del
	};
}]);