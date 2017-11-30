var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    res.render('index', {title: 'Hello from render'});
});

app.get('/books', function(req, res) {
   res.send('Hello Books');
});

app.listen(port, function(err) {
   console.log('running server on port ' + port);
});


module.exports = app;
