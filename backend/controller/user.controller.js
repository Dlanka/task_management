"use strict";

function User() {

	User = require( '../models/user' );

	// Add User
	var addUser = function ( user, callback ) {
		User.create( user, callback );
	}

	// Get all users
	var getAllUsers = function ( callback, limit ) {
		User.find( callback )
			.limit( limit );
	}

	return {
		addUser: addUser,
		getAllUsers: getAllUsers
	}

}

module.exports = User();
