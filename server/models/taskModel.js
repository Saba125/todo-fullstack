const mongoose = require("mongoose")
const taskSchema = new mongoose.Schema({
  userId: String,
  title: {
    type: String,
    required: [true, "Task title is required"],
    trim: true,
    minLength: [2, "Task title must be longer"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})
const Task = mongoose.model("task", taskSchema)
module.exports = Task
