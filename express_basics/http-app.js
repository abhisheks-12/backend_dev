// const express = require("express");
// const app = express();

// Methods
// app.get -----> read data
// app.post ---> insert data
// app.put ---> update data
// app.delete ----> delete data
// app.all
// app.use ---> middleware
// app.listen ----> listen to server on specific port


const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the home");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Us");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(5001, () => {
  console.log("server is listening");
});
