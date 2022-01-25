const { taskRepository } = require("../../../common/repositories/taskRepository");
const { CreateTaskController } = require("./CreateTaskController");
const { CreateTaskUC } = require("./CreateTaskUC");


const createTaskUC = new CreateTaskUC(taskRepository)
const createTaskController = new CreateTaskController(createTaskUC)

module.exports = { createTaskUC, createTaskController }
