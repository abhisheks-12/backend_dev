const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to home page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Us</h1>");
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  const { productID, reviewID } = req.params;
  res.send(`All Data ${productID} ${reviewID}`);
});

// app.get()
app.listen(5000, () => {
  console.log("app is listening on port 5000");
});
