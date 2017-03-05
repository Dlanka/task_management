var mongoose = require( 'mongoose' );

// User Schema
var userSchema = mongoose.Schema( {
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	active: {
		type: Boolean
	}
} );

module.exports = User = mongoose.model( 'User', userSchema );
