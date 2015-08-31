var MongoClient = require('mongodb').MongoClient;
var express = require('express'),
    app = express(),
    http = require('http'),
    cons = require('consolidate'),
    stylus = require('stylus');

var Post = require("./models/post")

app.use(express.static(__dirname + '/public'));

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

app.use(bodyParser.urlencoded({extended: true}));

app.use("/api/posts", require("./controllers/api/posts"))
app.use(require("./controllers/static"))

app.get('*', function(req, res){
	res.status(404).render("404");
});

app.listen(process.env.PORT || 8080, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
