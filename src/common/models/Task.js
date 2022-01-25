const { Schema, model } = require('mongoose')

const taskSchema = new Schema({
  userId: String,
  name: String,
  description: String,
  deadline: Date,
  isDone: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true })

const Task = model('tasks', taskSchema)

module.exports = { Task }