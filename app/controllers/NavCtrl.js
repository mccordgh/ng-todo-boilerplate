"use strict";

app.controller('ToDoNavCtrl', function($scope, SearchTermData, AuthFactory){
	
	// console.log("isAuth", isAuth());
	// $scope.isLoggedInt = isAuth();
	$scope.searchText = SearchTermData;
	$scope.navItems = [
		{
			name: "Logout",
			url: "#/login"
		},
		{
			name: "Login / Register",
			url: "#/login"
		},
		{
			name: "All Items",
			url: "#/items/list"
		}, 
		{
			name: "Add Item",
			url: "#/items/new"
		}
	];

});
