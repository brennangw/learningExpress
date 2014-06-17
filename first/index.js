// Include the Node HTTP library
var http = require('http');
// Include the Express module
var express = require('express');
// Create an instance of Express
var app = express();


var port = 3000;

//set the view engine
app.set('view engine' , 'jade');
//where to find the view files
app.set('views', './views');

//A route for the home page - will render a view
app.get('/', function(req, res) {
	res.render('index');
});

app.get('/say-hello', function(req,res){
	res.render('hello');
});

app.get('/test', function(req, res) {
	res.send('this is a test');	
});

http.createServer(app).listen(port, function () {
	console.log('App started on port: ' + port);
});






