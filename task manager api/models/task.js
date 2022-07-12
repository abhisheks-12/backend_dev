const mongoose = require("mongoose");

const TaskScheme = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

const Tasks = mongoose.model("Task", TaskScheme);
// module.exports = Tasks;
