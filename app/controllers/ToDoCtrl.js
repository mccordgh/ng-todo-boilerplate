"use strict";

app.controller('ToDoCtrl', function($scope, $location){

    $scope.welcome = 'Hello';
    $scope.showListView = true;
    $scope.newTask = {};

    $scope.newItem = () => {
        $location.url("/items/new");
    };

    $scope.allItems = () => {
        $location.url("/items/list");
    };

});