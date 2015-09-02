var MongoClient = require('mongodb').MongoClient;
var express = require('express'),
    app = express(),
    http = require('http'),
    cons = require('consolidate'),
    stylus = require('stylus'),
    path = require('path');

var favicon = require('serve-favicon');
var bodyParser = require('body-parser')
var Post = require("./models/post")


app.use(express.static(__dirname + '/public'));

app.use(favicon(path.join(__dirname,'public','img','insieme_favicon_1.ico')));

app.use(stylus.middleware({
    debug: true,
    src: __dirname + '/views',
    dest: __dirname + '/public'
}));  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
      extended: true
}));

app.use("/api/posts", require("./controllers/api/posts"))
app.use("/api/events", require("./controllers/api/events"))
app.use(require("./controllers/static"))

//app.get('*', function(req, res){
//	res.status(404).render("404");
//});

app.listen(process.env.PORT || 8080, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
