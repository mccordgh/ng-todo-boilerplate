"use strict";

app.factory("AuthFactory", function() {

	let AFactory = {
		createUser(userObj) {
			return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password);
		},
		loginUser(userObj) {
			return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password);
		},
		logoutUser(userObj) {
			return firebase.auth().signOut();
		},
		isAuthenticated() {
			return new Promise((resolve, reject) => {
				firebase.auth().onAuthStateChanged((user) => {
					if (user) {
						resolve(true);
					} else {
						resolve(false);
					}
				});
			});
		}
	};

	return AFactory;

});