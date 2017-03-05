var express = require( 'express' );
var app = express();

User = require( '../controller/user.controller' );

// Add User
app.post( '/', function ( req, res ) {
	var user = req.body;
	User.addUser( user, function ( err, user ) {
		if ( err ) {
			throw err;
		}
		console.log( 'Inser user id ', user._id );
		res.json( user._id );
	} );
} );

// Get all users
app.get( '/all', function ( req, res ) {
	User.getAllUsers( function ( err, users ) {
		if ( err ) {
			throw err;
		}
		res.json( users );
	} );
} );

module.exports = user = app;
