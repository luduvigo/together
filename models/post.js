var db = require("../db")
var Post = db.model("Post", {
	username: 			{type: String,   required: true},
	date_activity:      {type: String,   required: true},
	place:				{type: String,   required: true},
	body:     			{type: String,   required: true},
	date_inserted:      {type: Date,     required: true, default: Date.now }
})

module.exports = Post