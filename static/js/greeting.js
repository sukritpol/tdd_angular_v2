// Code goes here
function GreetingController($scope){
	// ng-model
	$scope.name = 'May';
	$scope.clear = '';
	$scope.formClear = '';

	$scope.getName = function() {
		return $scope.name;
	};

	$scope.clear = function(){
		$scope.name = '';
		//return name;
	};

	$scope.formClear = function(){
		$scope.name = '';
	};

};