var express = require("express")
var router = express.Router()

router.use(express.static(__dirname + "/../assets"))
router.get("/posts", function(req, res){
	res.sendfile("layouts/posts.html")
})
router.get("/demo", function(req, res){
	res.sendfile("layouts/demo.html")
})
router.get("/date", function(req, res){
	res.sendfile("layouts/date_picker.html")
})

module.exports = router