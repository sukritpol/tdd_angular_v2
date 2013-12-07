function TodoController($scope){

	$scope.todos = [
	{name:'เรียน Angular',isChecked: true},
	{name:'เรียน TDD',isChecked: true},
	{name:'กลับบ้าน',isChecked: false}];
	//$scope.listTodoAdd;
	$scope.todoName = '';

	$scope.getCountItem = function(){
		return $scope.todos.length;
	};

	$scope.getAllList = function(){
		return $scope.todos;
	}

	$scope.getTodo = function(index){
		return $scope.todos[index];
	}


	$scope.clearText = function(){
		$scope.todoName = "";
	}

	$scope.addTodo = function(){
		if($scope.todoName != ''){
			$scope.todos.push({name:$scope.todoName,isChecked:false});
		}
		$scope.clearText();
	}


};
