const express = require("express");
const route = express.Router();
const {
  getTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

route.get("/", getTasks);
route.post("/", createTask);
route.get("/:id", getSingleTask);
route.patch("/:id", updateTask);
route.delete("/:id", deleteTask);

module.exports = route;
