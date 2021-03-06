const express = require("express");
const app = express();
const { products, persons } = require("./data");

app.get("/", (req, res) => {
  res.send(
    `<h1>Welcome to our site</h1> <h3><a href="/api/products">View Products</a></h3>`
  );
});

app.get("/api/products", (req, res) => {
  // res.json(products);
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return {
      id,
      name,
      image,
    };
  });
  res.json(newProducts);
});

// Route Paramters
app.get("/api/products/:productID", (req, res) => {
  // console.log(req);
  // console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find((product) => {
    return product.id === Number(productID);
  });
  if (!singleProduct) {
    return res.status(404).send("Resources Not Found");
  }
  return res.json(singleProduct);
});

// Route Paramters
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  // console.log(req.params);
  res.send("<h1>Hi my name is </h1>");
});

// Query Paramaters
app.get("/api/v1/query", (req, res) => {
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
  res.status(404).send("Resources not found");
});

app.listen(5001, () => {
  console.log("Server is running");
});
