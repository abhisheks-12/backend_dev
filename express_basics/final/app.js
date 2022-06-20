const express = require("express");
const app = express();
// let { people } = require("./data");
const people = require("./refactor/people");
const login = require("./refactor/login");

app.use(express.static("./methods-public"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/login", login);
app.use("/api/peoples", people);

app.listen(5000, () => {
  console.log("App is listening on port 5000");
});
