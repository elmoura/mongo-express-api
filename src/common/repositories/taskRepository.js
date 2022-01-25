const { Task } = require("../models/Task");

class TaskRepository {
  constructor() {
    this.taskConnection = Task
  }

  async create(taskInput) {
    return this.taskConnection.create(taskInput)
  }
}

const taskRepository = new TaskRepository()

module.exports = { taskRepository, TaskRepository }