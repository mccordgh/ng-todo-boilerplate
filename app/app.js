"use strict";

var app = angular.module('TodoApp', ["ngRoute"]);

let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
	AuthFactory.isAuthenticated()
		.then((userExists) => {
			if(userExists) {
				resolve();
			} else {
				reject();
			}
		});
});

app.config(function($routeProvider){
	
	$routeProvider
		.when('/items/list', {
			templateUrl: '../partials/item-list.html',
			controller: 'ItemListCtrl',
			resolve: {isAuth}
		})
		.when('/items/new', {
			templateUrl: '../partials/item-form.html',
			controller: 'ItemNewCtrl',
			resolve: {isAuth}
		})
		.when('/items/:itemId', {
			templateUrl: '../partials/item-details.html',
			controller: 'ItemViewCtrl',
			resolve: {isAuth}
		})
		.when('/login', {
			templateUrl: '../partials/login.html',
			controller: 'LoginCtrl'
		})
		.otherwise('/items/list');

});

app.run(($location, FBCreds) => {

	let authConfig = {
		apiKey: FBCreds.apiKey,
		authDomain: FBCreds.authDomain,
		URL: FBCreds.URL
	};

	firebase.initializeApp(authConfig);

	
});