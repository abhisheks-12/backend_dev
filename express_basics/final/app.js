const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send(
    `<h1>Welcome to home page</h1> <h3><a href="/api/products">All Products</a></h3>`
  );
});

app.get("/api/products", (req, res) => {
  // res.json(products);
  const newProducts = products.map((product) => {
    const { id, name, price } = product;
    return { id, name, price };
  });
  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  // console.log(productID);
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send("Page not found");
  }
  return res.send(singleProduct);
});

app.get("/api/products/:productID/user/:userID", (req, res) => {
  const { productID, userID } = req.params;
  res.send(`<h3>Hello World ${productID} ${userID}</h3>`);
});

app.get("/api/v2/query", (req, res) => {
  const { search, limit } = req.query;
  // console.log(search, limit);
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) =>
      product.name.startsWith(search)
    );
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    // return res.status(200).send("resouces not avaliable");
    return res.status(200).json({ sucess: true, data: [] });
  }

  res.status(200).json(sortedProducts);
});

app.all("*", (req, res) => {
  res.send("Resources not found");
});

app.listen(5001, () => {
  console.log("server is listening");
});
