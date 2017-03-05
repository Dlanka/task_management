var express = require( 'express' );
var app = express();
var mongoose = require( 'mongoose' );
var bodyParser = require( 'body-parser' );

var user = require( './routers/userRouter' );

app.use( bodyParser.json() );

//connect to mongoose
mongoose.connect( 'mongodb://localhost:27017/dojob' );
var db = mongoose.connection;

app.get( '/', function ( req, res ) {
	res.send( 'Please go on api/user , api/task ect' );
} )

// User
app.use( '/api/user', user );


app.listen( 3000 );
console.log( 'Running on the port 3000' );
