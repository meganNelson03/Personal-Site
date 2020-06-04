var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/art", (req, res) => {
  res.send("art site");
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
