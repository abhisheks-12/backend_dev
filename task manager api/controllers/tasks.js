// const Tasks = require("../models/task");

const getTasks = (req, res) => {
  res.send("Get task");
};

const getSingleTask = (req, res) => {
  res.send("Get Single task");
};

const createTask = async (req, res) => {
  const task = await Tasks.create(req.body);
  res.status(201).json({ task });
};

const updateTask = (req, res) => {
  res.send("Updated task");
};

const deleteTask = (req, res) => {
  res.send("task Deleted");
};

module.exports = {
  getTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
