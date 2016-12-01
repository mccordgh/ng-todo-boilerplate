"use strict";

app.controller('ItemNewCtrl', function($scope, ItemStorage, $location){

	$scope.items = ItemStorage.getItemList();
	$scope.newTask = {};

	$scope.addNewItem = () => {
	    $scope.newTask.isCompleted = false;
	    $scope.newTask.id = $scope.items.length;
	    ItemStorage.postNewItem($scope.newTask);
	    $scope.newTask = {};
			$location.url("/items/list");
		};

});
