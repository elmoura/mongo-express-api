const { TaskRepository } = require('../../../common/repositories/taskRepository')

class CreateTaskUC {
  constructor(taskRepository) {
    if (!taskRepository instanceof TaskRepository) {
      throw new Error(`Invalid TaskRepository passed to ${this.name}`)
    }

    this.taskRepository = taskRepository
  }

  async execute(taskInput) {
    return this.taskRepository.create(taskInput)
  }
}

module.exports = { CreateTaskUC }