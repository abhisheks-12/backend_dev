const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("./navbar_app"));


app.get("/", (req, res) => {
  res.send(path.resolve(__dirname, "./navbar_app/index.html"));
});


app.all("*", (req, res) => {
  res.send("Page not found");
});

app.listen(5001, () => {
  console.log("server is listening");
});
