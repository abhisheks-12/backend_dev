// same navbar using express
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./navbar_app"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar_app/index.html"));
});

app.all("*", (req, res) => {
  res.send("Resources not found");
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
