var express = require("express");
var app = express();

// var mongojs = requre('mongojs');
// var db = mongojs('resume', ['resume']);
// var bodyParser = require('body-parser');

// app.get('/',function(req, res){
//   res.send("Hello world from server.js");
// });
app.use(express.static(__dirname + "/AnasPage"));

app.listen(8080);
console.log("running on port 8080");
