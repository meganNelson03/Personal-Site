var mongoose = require("mongoose");

var pieceSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	width: Number,
	height: Number
}, {collection: "artpieces"});

module.exports = mongoose.model("Piece", pieceSchema, "artpieces");
