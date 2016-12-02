"use strict";

app.controller('ToDoNavCtrl', function($scope, SearchTermData){
	
	$scope.searchText = SearchTermData;
	$scope.navItems = [
		{
			name: "Logout",
			url: "#/logout"
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
