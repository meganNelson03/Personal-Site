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

seedArtDatabase();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
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

  var emailRegEx = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

  if (!emailRegEx.test(req.body.email)) {
    // if email is not in valid format
    console.log("NOT A VALID EMAIL: " + req.body.email);
    res.sendFile(__dirname + "/views/index.html");


  } else {

  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_CLIENT,
      pass: process.env.EMAIL_PASSWORD
    }
    
  });

  var mailOptions= {
    from: req.body.email,
    to: process.env.EMAIL_CLIENT,
    subject: "Email from Personal Site",
    text: "Name: " + req.body.name + "\n" + "Email: " + req.body.email + "\n\n" + req.body.message
  }

  console.log(mailOptions.from, mailOptions.to, mailOptions.subject, mailOptions.text);

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);

    } else {
      res.sendFile(__dirname + "/views/index.html");
    }
  });

  }


});

app.listen(8085, () => {
  console.log("Listening on port 8085");
});
