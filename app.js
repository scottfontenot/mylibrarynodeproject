var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(express.static('views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
   res.send('Hello World');
});

app.get('/books', function(req, res){
   res.send('Hello Books');
});

app.listen(port, function(err){
   console.log('running server on port ' + port);
});


module.exports = app;
