// Seed database with pieceSchema
var mongoose = require("mongoose");
var Piece = require("./models/pieces.js");
var pieces = require("./database.js");


function seedArtDatabase() {

	Piece.deleteMany({}, (err) => {

		if (err) throw err;
		// console.log("Deleted piece");

		pieces.forEach((piece) => {

			Piece.create(piece, (err, art) => {
					// console.log("Created piece: " + art);
			});
		});


	});
}

module.exports = seedArtDatabase;
