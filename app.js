require('dotenv').config();

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var nodemailer = require("nodemailer");

var app = express();
app.use(express.static(__dirname + "/public"));
mongoose.connect("mongodb://localhost:27017/personal_site", {useNewUrlParser: "true", useUnifiedTopology: "true"});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var Piece = require("./models/pieces.js");
var seedArtDatabase = require("./seed.js");

const PORT = process.env.PORT || 8087;

seedArtDatabase();

app.get("/", (req, res) => {

  res.render("index", {message: "", client_message: ""});

});

app.get("/art", (req, res) => {

  Piece.find({}, (err, pieces) => {
		if (err) {
			console.log(err);
      res.render("index");
		} else {
			res.render("art", {pieces: pieces});
		}
  });

});

app.post("/", (req, res) => {

  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_CLIENT,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  var mailOptions = {
    from: req.body.email,
    to: process.env.EMAIL_CLIENT,
    subject: "Email from Personal Site",
    text: "Name: " + req.body.name + "\n" + "Email: " + req.body.email + "\n\n" + req.body.message
  }

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.render("index", {message: "Something went wrong, please try again.", client_message : req.body.message });
    } else {
      res.render("index", {message: "Your message has been sent successfully!"});
    }
  });

});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
