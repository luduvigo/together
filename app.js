var MongoClient = require('mongodb').MongoClient;
var express = require('express'),
    app = express(),
    http = require('http'),
    cons = require('consolidate'),
    stylus = require('stylus'),

//set path to the views (template) directory
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'jade');

app.use(stylus.middleware({
    debug: true,
    src: __dirname + '/views',
    dest: __dirname + '/public'
}));  
app.use(express.static(__dirname + '/public'));

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");


var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
      extended: true
}));

app.get('/', function (req, res) {
    res.render('index');
});

app.use(bodyParser.urlencoded({extended: true}));

app.get('*', function(req, res){
	res.status(404).render("404");
});

app.listen(8080);
console.log("Express server started on port 8080");

var ngrok = require('ngrok');
ngrok.connect(8080, function (err, url) {
       // https://leftover.ngrok.com -> 127.0.0.1:8080  
});
