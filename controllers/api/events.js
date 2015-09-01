var Post = require("../../models/event")
var router = require("express").Router()

router.get("/", function (req, res, next){
	console.log("Event get")
	Event.find().sort('-date').exec(function(err, events){
		if (err) {
			return next(err)
		}	
		res.json(events)
	})
})

router.post("/", function(req, res, next){
	console.log("event received")
	
	var event = new Event({
			title:		"",
	//when:               
	//dateinserted:       {type: Date,     required: true, default: Date.now },
	pictureurl:	      "",
	votes:                0,
	attendingpeople:      0,
	//comments:           {type: [String]},
	//tag:                {type: [String]},
	description:          "",
	//city:               {type: String,   required: true, default: "Roma"},
	address:              "",
	//zip:                {type: String,   required: true, default: "06000"},
	//coordinates:        {type: String}
	})
	event.save(function (err, event) {
		if(err) { return next(err) }
		res.json(201, event)
	})
})

module.exports = router
