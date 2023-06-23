// mvc and routes

const express = require("express");
const app = express();
const people = require("./routes/people");
const login = require("./routes/auth");

// static data
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());
//  Route
app.use("/api/people", people);
// login route
app.use("/login", login);

app.listen(5000, () => {
  console.log("App is listening");
});
