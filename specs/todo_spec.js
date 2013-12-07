describe('TodoController', function() {
	var $scope;

	beforeEach(inject(function($rootScope,$controller) {
		var configuration;
		$scope = $rootScope.$new();
		configuration = { $scope: $scope };
		$controller('TodoController', configuration );
	}));

	it('should default return 3', function() {
        expect($scope.getCountItem()).toEqual(3);
    });

    it('Get default 3 name value',function(){
        expect($scope.getTodo(0).name).toEqual('เรียน Angular');
        expect($scope.getTodo(1).name).toEqual('เรียน TDD');
        expect($scope.getTodo(2).name).toEqual('กลับบ้าน');
    })

    it('Get defalut 4 Value',function(){
        expect($scope.getTodo(0).isChecked).toEqual(true);
        expect($scope.getTodo(1).isChecked).toEqual(true);
        expect($scope.getTodo(2).isChecked).toEqual(false);
    })

    /*
    it('Test Add item',function(){
        $scope.todoItem = 'test';
        $scope.addTodo();
        expect($scope.getTodo(3).isChecked).toEqual(false);
    })
    */
});