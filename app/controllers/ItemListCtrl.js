"use strict";

app.controller('ItemListCtrl', function($scope, ItemStorage){

  ItemStorage.getItemList()
  	.then((data) => {
  		$scope.items = data;
  		$scope.$apply();
  	});   

});