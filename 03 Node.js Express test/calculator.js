//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res){
  var weigth = parseFloat(req.body.weigth);
  var heigth = parseFloat(req.body.heigth);

  var bmi = weigth / (heigth * heigth);

  res.send("Your BMI is: " + bmi);
});

app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("Result: " + result);
});

app.listen(3000, function() {
  console.log("App listening on port: 3000");
});
