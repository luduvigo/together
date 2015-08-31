var db = require("../db")
var Event = db.model("Event", {
	title:		    {type: String,   required: true},
	when:               {type: Date },
	dateinserted:       {type: Date,     required: true, default: Date.now },
	pictureurl:	    {type: String,   required: true},
	votes:              {type: Number,   required: true, default: 0},
	attendingpeople:    {type: Number,   required: true, default: 0},
	comments:           {type: [String]},
	tag:                {type: [String]},
	description:        {type: String,   required: true},
	city:               {type: String,   required: true, default: "Roma"},
	address:            {type: String,   required: true},
	zip:                {type: String,   required: true, default: "06000"},
	coordinates:        {type: String}
})

module.exports = Event
