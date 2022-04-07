const express = require("express");
const path = require("path");

const app = express();

app.all("*", (req, res) => {
  res.status(404).send("Resources not found");
});

app.listen(5001, () => {
  console.log("server running on port 5001");
});
