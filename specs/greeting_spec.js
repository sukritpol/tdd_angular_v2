describe('Greeting Controller', function() {
	var $scope;

	beforeEach(inject(function($rootScope,$controller) {
		var configuration;
		$scope = $rootScope.$new();
		configuration = { $scope: $scope };
		$controller('GreetingController', configuration );
	}));

	it('should default return May', function() {
        expect($scope.getName()).toEqual('May');
    });

    it('should return Jua when name is Jua', function() {
    	$scope.name = 'Jua';
        expect($scope.getName()).toEqual('Jua');
    });

    it('should clear Text', function(){
    	//$scope.clear = '';
    	$scope.clear();
    	expect($scope.getName()).toEqual('');
    });

    it('should clear form', function(){
    	$scope.formClear();
    	expect($scope.getName()).toEqual('');
    });

});