const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();

app.use(bodyParser.json());

app.get("/login", function (req, res) {
  const loginData = req.body;
  const key = "Surya123@";
  const jwtToken = jwt.sign(loginData, key);
  console.log("this is login page");
  res.send({ token: jwtToken });
});

app.get("/user", function (req, res) {
  console.log("this is user page");
  const rawtokenfromgene = req.headers["authorization"];
  console.log(rawtokenfromgene);
  const token = rawtokenfromgene.split(" ")[1];
  const key = "Surya123@";
  const decoded = jwt.verify(token, key);
  console.log("this is decoded data=>", decoded);
  res.status(200).send(decoded);
});
app.listen(8080, function () {
  console.log("server is running at port 8080");
});
