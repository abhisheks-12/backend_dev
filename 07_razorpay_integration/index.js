const express = require("express");
const cors = require("cors");
const Razorpay = require("razorpay");
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "hello world",
  });
});

app.post("/api/orders", async (req, res) => {
  try {
    const { amount } = req.body;

    const instance = new Razorpay({
      key_id: "",
      key_secret: "",
    });

    const response = await instance.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: "receipt#1",
      notes: {
        key1: "hello",
        key2: "world",
      },
    });

    return res.status(200).json({
      response,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      error: err,
    });
  }
});

app.listen(4000, () => console.log("App is listening on port 4000"));
