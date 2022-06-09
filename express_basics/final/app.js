const express = require("express");
const app = express();
const path = require("path");
let { people } = require("./data");

app.use(express.static("./methods-public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./methods-public/index.html"));
});

app.get("/api/people", (req, res) => {
  res.status(200).json({ response: "sucess", data: people });
});

app.listen(5000, () => {
  console.log("App is listening on port 5000");
});
