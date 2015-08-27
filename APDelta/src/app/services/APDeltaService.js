app.factory('APDeltaService', ['APIPromiseService', function(APIPromiseService) {
	return {
		getChampions: function() {
			APIPromiseService.getChampions()
				.then(function(data) {
					console.log(data);
				}, function(error) {
					console.log("error");
				});
		},
		getChampionData: function(data) {
			APIPromiseService.getChampionData(data)
				.then(function(data) {
					console.log(data);
				}, function(error) {
					console.log("error");
				});
		}
	}
}]);