var express = require("express");

var app = express();
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


app.listen(8082, () => {
  console.log("Listening on port 8082");
});
