const express = require("express");
const route = express.Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/tasks");

route.get("/", getUsers);
route.post("/", createUser);
route.get("/:id", getSingleUser);
route.patch("/:id", updateUser);
route.delete("/:id", deleteUser);

module.exports = route;
