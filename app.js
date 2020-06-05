var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();
app.use(express.static(__dirname + "/public"));
mongoose.connect("mongodb://localhost:27017/personal_site", {useNewUrlParser: "true", useUnifiedTopology: "true"});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var Piece = require("./models/pieces.js");
var seedArtDatabase = require("./seed.js");

seedArtDatabase();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/art", (req, res) => {

  Piece.find({}, (err, pieces) => {
		if (err) {
			console.log(err);
		} else {
			res.render("art", {pieces: pieces});
		}

	});


});


app.post("/", (req, res) => {
  // send email on form POST request
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;

  res.send(`Your name is ${name}, your email is ${email}, your message is ${message}`);
})

app.listen(8082, () => {
  console.log("Listening on port 8082");
});
