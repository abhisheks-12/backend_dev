const express = require("express");
const app = express();
const { products, people } = require("./data");

app.get("/", (req, res) => {
  res.json(products);
});

app.listen(5001, () => {
  console.log("server is running on port 5001");
});
