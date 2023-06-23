const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(400).send(`Hello ${name}`);
  }
  return res.send("Enter Credentials");
});

module.exports = router;
