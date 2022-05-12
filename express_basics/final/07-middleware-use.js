const express = require("express");
const app = express();
const logger = require("./logger.js");
const authorize = require("./authorization");

// app.use("/api",logger);   ->>>>  whatever comes after /api -> 
// /api is path here
app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.get("/api/products", (req, res) => {
  res.send("<h1>Products</h1>");
});

app.get("/api/users", (req, res) => {
  res.send("<h1>Users</h1>");
});

app.listen(5000, () => {
  console.log("app is listening 5000 .....");
});
