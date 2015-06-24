var mongoose = require("mongoose")
mongoose.connect("mongodb://luduvigo:pass@ds037551.mongolab.com:37551/insieme_db", function(req, res){
	console.log("Mongo DB connected")
})
module.exports = mongoose