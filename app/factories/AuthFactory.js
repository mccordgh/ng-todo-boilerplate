"use strict";

app.factory("AuthFactory", function() {

	let currentUser = null;

	let AFactory = {
		createUser(userObj) {
			return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password);
		},
		loginUser(userObj) {
			currentUser = null;
			return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password);
		},
		logoutUser(userObj) {
			return firebase.auth().signOut();
		},
		isAuthenticated() {
			return new Promise((resolve, reject) => {
				firebase.auth().onAuthStateChanged((user) => {
					if (user) {
						currentUser = user.uid;
						console.log("currentUser", currentUser);
						resolve(true);
					} else {
						resolve(false);
					}
				});
			});
		},
		getUser() {
			return currentUser;
		}
	};

	return AFactory;

});