"use strict";

app.factory("ItemStorage", function($http, FBCreds) {

	var getItemList = () => {
		let items = [];
		return new Promise((resolve, reject) => {
			$http.get(`${FBCreds.URL}/items.json`)
				.success((itemObject) => {
					Object.keys(itemObject).forEach((key) => {
						itemObject[key].id = key;
						items.push(itemObject[key]);
					});
					
					resolve(items);
				})
				.error((error) => {
					reject(error);
				});
		});
	};

	var postNewItem = (newTask) => {

	};

	return {getItemList, postNewItem};

});